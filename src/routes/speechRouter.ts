import { SpeechToText } from './../controllers/speechController';
import { Router } from 'express';
import wavFileInfo from '../middlewares/wavFileInfo';
import downloadFirebaseFile from '../middlewares/downloadFirebaseFile';

const speechRouter = Router();

speechRouter.use(downloadFirebaseFile);
speechRouter.use(wavFileInfo);

speechRouter.get('/', SpeechToText);

export default speechRouter;
