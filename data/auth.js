let users = [{
        id: '1',
        username: 'apple',
        password: '1111',
        name: '김사과',
        email: 'apple@naver',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    }
]

// 회원가입 데이터 등록
export async function createUser(username, password, name, email){
    const user = {
        id: 10,
        username,
        password,
        name,
        email,
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    }

    users = [user, ...users];
    return users
}

// 로그인 시도하기
export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user;
}