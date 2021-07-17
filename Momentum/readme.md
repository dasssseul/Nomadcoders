# 바닐라 JS로 크롬 앱 만들기

3. javascript on the browser

* Document : 웹페이지 그 자체, HTML 요소에 접근하고자 할 때 사용
    * HTML 요소의 선택
        * getElementsId(아이디) : 해당 아이디의 요소 선택
        * getElementsByClassName(클래스명) : 해당 클래스에 속한 요소 모두 선택(배열 형태)
        * getElementsByTagName(태그명) : 해당 태그 이름의 요소 모두 선택(배열 형태)
        * querySelector(css 선택자) : css방식으로 요소를 선택, 첫번째 요소 단 하나만 선택
        * querySelectorAll(css 선택자) : css방식으로 해당 요소 모두 선택(배열 형태)
    * 이벤트 
        * addEventListener(이벤트명, 호출 함수) : 이벤트 발생 시 호출 함수 실행
        