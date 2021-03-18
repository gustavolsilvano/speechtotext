import { SpeechToText } from './../controllers/speechController';
import { Router } from 'express';
import wavFileInfo from '../middlewares/wavFileInfo';
import downloadFirebaseFile from '../middlewares/downloadFirebaseFile';
import convertToMP3 from '../middlewares/convertToMP3';

const speechRouter = Router();

speechRouter.use(downloadFirebaseFile);
speechRouter.use(convertToMP3);
speechRouter.use(wavFileInfo);

speechRouter.post('/', SpeechToText);

export default speechRouter;
