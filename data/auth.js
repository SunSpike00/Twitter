let users = [{
        id: '1',
        username: 'apple',
        password: '1111',
        name: '김사과',
        email: 'apple@naver',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    }
]

// 아이디로 회원정보 찾기
export async function getUser(username){
    return users.filter((user) => user.username == username);
}

// 로그인 시도하기
export async function login(username, password){
    return users.filter((user) => user.username == username && user.password == password)
}

// 회원가입 데이터 등록
export async function regist(username, password, name, email){
    const input_id = 2;

    const user = {
        id: input_id,
        username,
        password,
        name,
        email,
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    }

    users = [user, ...users];

    return users.filter((user) => user.username == username && user.password == password)
}