const loginForm = document.querySelector("#login-form"); //id가 login-form인 태그를 찾아 loginForm 이름으로 대체
const loginInput = document.querySelector("#login-form input"); //id가 login-form이고 태그가 input인 태그를 loginForm 이름으로 대체
const greenting = document.querySelector("#greenting"); //id가 greenting인 태그를 greenting 이름으로 대체

const HIDDEN_CLASSNAME = "hidden"; //2번 이상 사용하여 오타방지를 위해 변수에 저장
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //어떤 event의 기본 동작(어떤 function에 대해 브라우저가 기본적으로 수행하는 것)이 발생되지 않도록 막는 것
  loginForm.classList.add(HIDDEN_CLASSNAME); //hidden 클래스를 추가하여 로그인 폼 삭제
  const username = loginInput.value; //input에 입력한 값은 value에 저장이 됨, username에 다시 저장
  localStorage.setItem(USERNAME_KEY, username); //데이터베이스에 key : value 식으로 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  //nsername은 매개변수
  greenting.innerText = `Hello ${username}`; //id가 greenting인 태그 안에 innerText로 username(매개변수) 값을 삽입
  greenting.classList.remove(HIDDEN_CLASSNAME); //원래 hidden 처리되어있던 클래스를 삭제하여 id가 greenting인 h1태그를 나타내줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //user name에 상응하는 값을 저장

if (savedUsername === null) {
  //username에 대한 값이 null이면
  loginForm.classList.remove(HIDDEN_CLASSNAME); //login-form을 보여지게
  loginForm.addEventListener("submit", onLoginSubmit); //login-form에서 submit을 클릭하면 onLoginSubmit을 실행
} else {
  //그게 아니면
  paintGreetings(savedUsername); //paintGreetings 함수에 username에 상응하는 값을 넣어줘라
}
