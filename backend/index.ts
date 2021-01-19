import {Server} from "./services/Server";
import express from 'express';
import { config } from 'dotenv';

if (!process.env.HEROKU) {
  config();
}
console.log('Creating express server.');
const server = new Server(express());
server.start(process.env.PORT || 8080);
