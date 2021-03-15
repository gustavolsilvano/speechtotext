import { Request, Response } from 'express';
const _ = require('lodash');
const speech = require('@google-cloud/speech');

const path = require('path');

export const SpeechToText = (req: Request, res: Response) => {
  const { wavFileInfo } = req;
  const { num_channels, sample_rate } = wavFileInfo.header;
  console.log(wavFileInfo);

  const speechClient = new speech.SpeechClient();

  // const file = fs.readFileSync(filePath);
  // const audioBytes = file.toString('base64');
  // const audio = {
  //   content: audioBytes,
  // };

  const audio = {
    uri: 'gs://audio-teste/record.wav',
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: sample_rate,
    languageCode: 'pt-BR',
    audioChannelCount: num_channels,
    enableSeparateRecognitionPerChannel: num_channels > 1 ? true : false,
  };

  const request = {
    audio,
    config,
  };

  speechClient
    .recognize(request)
    .then((data: any) => {
      const results = _.get(data[0], 'results', []);
      const transcription = results[0].alternatives[0].transcript;

      res.send(transcription);
    })
    .catch((err: any) => {
      console.error('ERROR:', err);
    });
};
