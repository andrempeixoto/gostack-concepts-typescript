import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', (request, response)=> {
  return helloWorld;
})

app.listen(3330);