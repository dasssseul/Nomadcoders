# 바닐라 JS로 크롬 앱 만들기

## Javascript on the browser

    * Document : 웹페이지 그 자체, HTML 요소에 접근하고자 할 때 사용
    * HTML 요소의 선택
        * getElementsId(아이디) : 해당 아이디의 요소 선택
        * getElementsByClassName(클래스명) : 해당 클래스에 속한 요소 모두 선택(배열 형태)
        * getElementsByTagName(태그명) : 해당 태그 이름의 요소 모두 선택(배열 형태)
        * querySelector(css 선택자) : css방식으로 요소를 선택, 첫번째 요소 단 하나만 선택
        * querySelectorAll(css 선택자) : css방식으로 해당 요소 모두 선택(배열 형태)
    * HTML 요소의 생성
        * createElement(태그명) : 자바스크립트에서 html 요소 생성
    * 이벤트 
        * 요소.addEventListener(이벤트명, 호출 함수) : 이벤트 발생 시 호출 함수 실행
            * 이벤트명 : click, mouseenter, mouseleave 등
        * window.addEventLister(이벤트명, 호출 함수) : window내 이벤트(body, head 등)
            * 이벤트명 : resize, copy, offline, online 등
        * css in js
            * 요소.classList.toggle(토큰) : 토큰이 클래스 리스트에 있다면 제거(remove), 없다면 추가(add)

## MOMENTUM APP 

    * Log In
        * preventDefault() : 브라우저의 기본 동작 막기
        * localStorage : 로그인 정보
            * setItem("키", 값) : 입력된 로그인 정보 저장
            * getItem("키") : 저장된 키 값 확인
    * Clock
        * setInterval(호출 함수, 시간) : 매 시간마다 호출 함수를 실행
        * setTimeout(호출 함수, 시간) : 첫 시간이 흐른 후 딱 한번만 호출 함수 실행
        * new Date() : 현재 시각 가져오기
            * getHours() : 현재 시간
            * getMinutes() : 현재 분
            * getSeconds() : 현재 초
        * 문자열.padStart(maxLength, 앞에 추가할 문자) : 문자열이 maxLangth보다 작다면 앞에 문자를 추가
        * 문자열.padEnd(maxLength, 뒤에 추가할 문자) : 문자열이 maxLangth보다 작다면 뒤에 문자를 추가
    * Quotes
        * Math.random() : 0부터 1사이의 랜덤한 수 제공
        * Math.round(숫자) : 반올림
        * Math.ceil(숫자) : 올림
        * Math.floor(숫자) : 내림
    * Background
        * document.body.appendChild(bgImage) : body의 가장 뒤에 bgImage 추가
        * document.body.prepend(bgImage) : body의 가장 앞에 bgImage 추가
    