import express from "express";
import morgan from "morgan";
import tweetsRouter from './router/tweets.js';
import authRouter from './router/auth.js';
import bodyParser from 'body-parser';
import { config } from "./config.js";
import { connectionDB } from "./db/database.js";

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json());
app.use(morgan("dev"));

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

// app.use((req, res, next) => {
//     res.sendStatus(404);
// });

connectionDB().then((db) => {
    console.log('몽구스를 이용하여 몽고디비에 접속 성공!');
    app.listen(config.host.port);
}).catch(console.error);

