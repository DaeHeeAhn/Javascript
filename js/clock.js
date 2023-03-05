const clock = document.querySelector("h2#clock"); //h2 태그 안의 clock id를 찾아라

function getClock() {
  const date = new Date(); //date 객체 생성
  const hours = String(date.getHours()).padStart(2, "0");
  //String()으로 넘버 타입인 date.getHours을 문자열로 바꿔준 후 padStart를 사용해 최소 2글자로 끝내며 공백은 "0"으로 채워줌
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//setInterval(sayHello, 5000); //setInterval : 매번 일어나야 하는 무언가(호출되는 함수, ms단위 5초)

// setTimeout(sayHello, 5000); //setTimeout : 무언가를 지정한 ms뒤에 실행(호출되는 함수, ms단위 5초)

getClock(); //getClock 함수 실행, 최초 한 번 실행하지 않으면 1초 뒤에 실행되는 setInterval 때문에 1초 뒤에 보이기 때문
setInterval(getClock, 1000);
