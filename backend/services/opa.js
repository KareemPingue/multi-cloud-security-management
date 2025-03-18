// services/opa.js
const { Opa } = require('@open-policy-agent/opa-wasm'); // Use CommonJS import style
const fs = require('fs');
const path = require('path');

let opaInstance;

const loadOpaPolicy = async () => {
  try {
    const bundlePath = path.resolve(__dirname, '../policies', 'bundle.tar.gz');  // Adjust path to your policy bundle

    // Read the policy bundle
    const bundleBuffer = fs.readFileSync(bundlePath);

    // Initialize OPA instance and load policy bundle
    opaInstance = new Opa();
    await opaInstance.load(bundleBuffer);

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
