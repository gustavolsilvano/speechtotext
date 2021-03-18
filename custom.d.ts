declare namespace Express {
  export interface Request {
    wavFileInfo?: any;
    filePath?: any;
    firebase?: any;
    fileName?: string;
    buffer?: ArrayBuffer;
  }
}
