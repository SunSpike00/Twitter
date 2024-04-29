import * as authRepository from "../data/auth.js";

// 아이디로 회원정보 찾는 컨트롤러
export async function getUser(req, res, next){
    const username = req.params.username;

    const data = await authRepository.getUser(username);
    if(data){
        res.status(200).json(data);
    } else {
        res.status(404).json({message: `${username}의 트윗이 없습니다.`})
    }
}

// 로그인 컨트롤러
export async function login(req, res, next){
    const { username, password } = req.body;

    console.log(username, password);
    const user = await authRepository.login(username, password)

    if(user){
        res.status(200).json(user);
    } else {
        res.status(404).json({message: `${username}의 트윗이 없습니다.`})
    }
}

// 회원가입 컨트롤러
export async function regist(req, res, next){
    const { username, password, name, email } = req.body;
    const user = await authRepository.regist(username, password, name, email)
    res.status(200).json(user);
}