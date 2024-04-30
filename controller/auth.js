import * as authRepository from "../data/auth.js";

// 로그인 컨트롤러
export async function login(req, res, next){
    const { username, password } = req.body;

    const user = await authRepository.login(username)

    if(user){
        res.status(200).json({message: `${username} 로그인 완료`});
    } else {
        res.status(404).json({message: `${username}님 아이디 또는 비밀번호 확인하세요`})
    }
}

// 회원가입 컨트롤러
export async function signup(req, res, next){
    const { username, password, name, email } = req.body;
    const users = await authRepository.createUser(username, password, name, email)

    if(users){
        res.status(200).json(users);
    }
}