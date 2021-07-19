
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 3-1. onLoginSubmit 함수 실행
function onLoginSubmit(event){
    // 브라우저의 기본 동작 막기
    event.preventDefault();
    // form에 hidden 클래스 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // loginInput 값을 변수에 저장
    const username = loginInput.value;
    // localStorage에 이름 저장
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
};

// 4. Hello username 화면에 출력
function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    // greeting에서 hidden 클래스 제거
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 1. 브라우저에 저장된 키 값 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 2-1. 저장된 키 값이 없다면
if (savedUsername === null){
    // loginForm에 hidden 클래스 제거
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit 이벤트가 발생하면 onLoginSubmit 함수 실행
    loginForm.addEventListener("submit", onLoginSubmit);
// 2-2. 저장된 키가 있다면
}else{
    // 4번의 paintGreeting 함수 실행
    paintGreeting(savedUsername);
}