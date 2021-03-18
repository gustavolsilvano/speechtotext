// @ts-nocheck
import { Request, Response } from 'express';
const Mp32Wav = require('mp3-to-wav');

export default async (req: Request, res: Response, next: any) => {
  const { filePath, fileName } = req;

  const fileExtension = fileName.split('.')[1];
  if (fileExtension !== 'mp3') return next();

  console.log('Converting File...');
  await new Mp32Wav(filePath).exec();

  const newFilePath = `${filePath.split('.')[0]}.wav`;
  req.filePath = newFilePath;
  next();
};
