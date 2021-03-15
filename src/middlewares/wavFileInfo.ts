import { Request, Response } from 'express';
const wavFileInfo = require('wav-file-info');

export default (req: Request, res: Response, next: any) => {
  const { filePath } = req;

  wavFileInfo.infoByFilename(filePath, function (err: any, info: any) {
    if (err) return res.send('error');
    req.wavFileInfo = info;
    req.filePath = filePath;
    next();
  });
};
