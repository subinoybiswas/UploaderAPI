import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import { generateUploadURL } from '../../utils/s3';
const router = express.Router();

router.get<{}, MessageResponse>('/upload', async (req, res) => {
  console.log('GET /upload')
  const url = await generateUploadURL()
  console.log('Generated URL:', url)
  res.send({ url })
})

router.use('/emojis', emojis);

export default router;
