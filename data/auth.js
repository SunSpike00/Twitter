let users = [{
        id: '1',
        username: 'apple',
        password: '$2b$10$HVKLerZD3Wf0yC6QBgAiKe/SCor.3cwi0vb/RUvmkk8MDWorYnbaW',
        name: '김사과',
        email: 'apple@naver',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    },
    {
        id: '2',
        username: 'banana',
        password: '$2b$10$HVKLerZD3Wf0yC6QBgAiKe/SCor.3cwi0vb/RUvmkk8MDWorYnbaW',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://www.logoyogo.com/web/wp-content/uploads/edd/2021/02/logoyogo-1-45-966x1024.jpg'
    }
]

// 아이디(username) 중복검사
export async function findByUsername(username){
    return users.find((user) => user.username === username)
}

// id 중복검사
export async function findById(id){
    return users.find((user) => user.id === id);
}

// 회원가입 데이터 등록
export async function createUser(user){
    const created = {id:'10', ...user}
    users.push(created)
    return created.username;
}

// 로그인 시도하기
export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user;
}