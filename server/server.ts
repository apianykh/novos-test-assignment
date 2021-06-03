import { initDB } from './models/DB';
import { join } from 'path'
import express from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';

(async () => { await initDB(join(__dirname, 'storage/db.json')); })();

const app = express();

app.use(cookieParser('keyboard cat'))

app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));

app.use(express.static("dist"));

export default app;