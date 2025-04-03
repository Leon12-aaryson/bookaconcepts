// netlify/functions/server.js
import express from 'express';
import serverless from 'netlify-lambda';
import { registerRoutes } from '../../server/routes';

const app = express();
const router = express.Router();

// Setup your middleware here
app.use('/.netlify/functions/server', router);

// Register your routes on the router
registerRoutes(router);

// Export the serverless function
export const handler = serverless(app);