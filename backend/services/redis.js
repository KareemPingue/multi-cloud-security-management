const { createClient } = require('@redis/client'); // Using the new import for @redis/client

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.on('connect', () => {
  console.log('✅ Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis Client Error', err);
});

// Use async/await to ensure the client is connected before making requests
const setCache = async (key, value) => {
  try {
    await redisClient.connect(); // Ensuring the connection is established
    const response = await redisClient.set(key, value);
    return response;
  } catch (error) {
    throw new Error('Error setting cache: ' + error.message);
  }
};

module.exports = { setCache };
