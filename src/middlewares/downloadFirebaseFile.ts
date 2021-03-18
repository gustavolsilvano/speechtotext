import { Request, Response } from 'express';
import { Storage } from '@google-cloud/storage';

import * as path from 'path';

export default async (req: Request, res: Response, next: any) => {
  const { fileURI } = req.body;

  const uriSplit = fileURI.split('/');

  const srcFilename = uriSplit[uriSplit.length - 1];
  const bucketName = 'audio-teste';
  const destFilename = path.join(
    __dirname,
    `../../public/audio/${srcFilename}`
  );

  const storage = new Storage();

  const options = {
    destination: destFilename,
  };

  await storage.bucket(bucketName).file(srcFilename).download(options);

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
  );

  req.filePath = destFilename;
  req.fileName = srcFilename;

  next();
};
