import express from "express";
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

// 해당 아이디에 대한 트윗글 가져오기
// GET
// http://localhost:8080/tweets?username=:username
router.get('/', tweetController.getTweets);


// 글번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id
router.get('/', tweetController.getTweet);


// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text
// json형태로 입력 후 추가된 데이터까지 모두 json으로 출력
router.post('/', tweetController.createTweet);


// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id(url에 붙임), username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', tweetController.updateTweet);


// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id
// id(URL)로
router.delete('/:id', tweetController.deleteTweet);









// // 해당 아이디에 대한 트윗글 가져오기
// // GET
// // http://localhost:8080/tweets?username=:username
// router.get('/', (req, res, next) => {
//     const username = req.query.username

//     const data = username
//         ? tweets.filter((tweet) => tweet.username == username)
//         : tweets;

//     res.status(200).json(data);
// });

// // 글번호에 대한 트윗 가져오기
// // GET
// // http://localhost:8080/tweets/:id
// router.get('/:id', (req, res, next) => {
//     const id = req.params.id
//     const tweet = tweets.find((tweet) => tweet.id == id);
//     if(tweet){
//         res.status(200).json(tweet);
//     }else{
//         res.status(404).json({message: `${id}의 트윗이 없습니다.`});
//     }
// });

// // 트윗하기
// // POST
// // http://localhost:8080/tweets
// // name, username, text
// // json형태로 입력 후 추가된 데이터까지 모두 json으로 출력
// router.post('/', (req, res) => {
//     const {name, username, text} = req.body
//     const input_id = tweets.length + 1
//     const tweet = {
//         id: input_id,
//         text: text,
//         createdAt: Date.now().toString(),
//         name: name,
//         username: username,
//         url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/06/logoyogo-1-109.jpg'
//     }

//     tweets = [tweet, ...tweets];
//     res.status(200).json(tweets);
// });

// // 트윗 수정하기
// // PUT
// // http://localhost:8080/tweets/:id
// // id(url에 붙임), username, text
// // json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const text = req.body.text;
//     const tweet = tweets.find((tweet) => tweet.id === id);
//     if(tweet){
//         tweet.text = text;
//         res.status(200).json(tweet);
//     }else{
//         res.status(404).json({message: `${id}의 트윗이 없습니다.`});
//     }
// });

// // 트윗 삭제하기
// // DELETE
// // http://localhost:8080/tweets/:id
// // id(URL)로
// router.delete('/:id', (req, res, next) => {
//     const id = req.params.id
//     tweets = tweets.filter((tweet) => tweet.id !== id);
//     res.sendStatus(204);
// });

export default router;