const express = require('express');
const redis = require('redis');
require('dotenv').config();
const { setCache } = require('./services/redis'); // Use the Redis service
const { evaluatePolicy } = require('./services/opa'); // Import the OPA service

const app = express();
const port = process.env.PORT || 5000;

// Redis connection setup
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

redisClient.on('connect', () => {
  console.log('✅ Connected to Redis');
});

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Multi-Cloud Security Management API');
});

// Redis Test Route
app.get('/cache', async (req, res) => {
  try {
    await setCache('test', 'value'); // Call the Redis service to set cache
    res.send('Redis test value set');
  } catch (error) {
    res.status(500).send('Error setting cache');
  }
});

// OPA Test Route
app.get('/validate-policy', async (req, res) => {
  try {
    // Example input data for policy evaluation
    const input = {
      path: "/",
      role: "admin",
    };

    // Evaluate the policy using OPA service
    const result = await evaluatePolicy(input);

    if (result && result.length > 0 && result[0].result === true) {
      return res.json({ allowed: true });
    }

    res.status(403).json({ allowed: false }); // If policy evaluation fails
  } catch (error) {
    console.error('Error validating policy:', error);
    res.status(500).json({ error: 'Error validating policy' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
