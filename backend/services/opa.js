const opaWasm = require('@open-policy-agent/opa-wasm');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const tar = require('tar-stream');

let opaInstance;

const extractWasmFromBundle = (bundleBuffer) => {
  return new Promise((resolve, reject) => {
    const extract = tar.extract();
    let wasmBuffer = null;

    extract.on('entry', (header, stream, next) => {
      // Look for the .wasm file in the tar archive
      if (header.name.endsWith('.wasm')) {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => {
          wasmBuffer = Buffer.concat(chunks);
          next();
        });
      } else {
        stream.resume(); // Skip this entry
        next();
      }
    });

    extract.on('finish', () => {
      if (wasmBuffer) {
        resolve(wasmBuffer);
      } else {
        reject(new Error('No .wasm file found in the bundle'));
      }
    });

    extract.on('error', reject);

    // Decompress and pipe to the tar extractor
    const gunzip = zlib.createGunzip();
    gunzip.pipe(extract);
    gunzip.end(bundleBuffer);
  });
};

const loadOpaPolicy = async () => {
  try {
    const bundlePath = path.resolve(__dirname, '../policies', 'bundle.tar.gz');
    console.log('Bundle path:', bundlePath);
    console.log('Bundle exists:', fs.existsSync(bundlePath));
    
    // Read the policy bundle
    const bundleBuffer = fs.readFileSync(bundlePath);
    
    // Extract the WebAssembly module from the bundle
    const wasmBuffer = await extractWasmFromBundle(bundleBuffer);
    console.log('Successfully extracted WebAssembly module from bundle');
    
    // Load the WebAssembly module using the correct API
    opaInstance = await opaWasm.loadPolicy(wasmBuffer);
    
    console.log('Policy loaded successfully');
  } catch (error) {
    console.error('Failed to load policy:', error);
    throw error;
  }
};

const evaluatePolicy = async (input) => {
  try {
    if (!opaInstance) {
      await loadOpaPolicy();  // Ensure the policy is loaded before evaluation
    }
    
    // Evaluate the policy with the provided input data
    const result = await opaInstance.evaluate(input);
    return result;
  } catch (error) {
    console.error('Policy evaluation failed:', error);
    throw error;
  }
};

module.exports = { evaluatePolicy };