import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const router = express.Router();
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});
export default router
