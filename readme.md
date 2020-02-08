개발도구는 visual studio code를 사용합니다.
https://code.visualstudio.com/Download

설치해야하는 extensions
- Prettier
- Bracket Pair Colorizer
- Color Highlight
- IntelliSense for CSS class names in HTML
- vscode-icons
- Node.js Modules Intellisense

크롬 설치해주세요.
https://www.google.com/intl/ko/chrome/

# 프론트엔드란?
사용자의 눈에 보이는 것들을 개발하는 파트입니다.
html,css,js를 사용하여 개발하며, 디자인감각과 개발능력이 동시에 필요한 분야입니다.

html : 제목, 단락, 목록 등과 같은 홈페이지의 구조를 잡아줄 때 사용, 웹페이지의 전체적인 뼈대(틀)을 구성하는 역할
css  : html로 작성된 문서에 디자인을 적용할 때 사용(컬러, 폰트 등)
javascript : html과 css로 만들어진 페이지를 동적으로 만들 때 사용, 버튼을 누르면 화면이 바뀌는 효과 등

# 백엔드란?
프론트엔드가 눈에 보이는 영역에 해당한다면, 백엔드는 눈에 보이지 않는 서버, 프로그램의 실질적 기능을 담당합니다.
웹페이지의 컨텐츠를 공급하고 내부적으로 데이터베이스를 관리할 수 있고, api호출도 가능합니다.
    * API : API(Application Programming Interface, 응용 프로그램 프로그래밍 인터페이스)는 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다.

# 자바스크립트 기초 (ES6)

- data Type
    Boolean (True, False)
    NULL
    Undefined
    Number (C언어와 달리 정수만을 표현하기 위한 자료형은 없음. 모두 실수형으로 표현)
    String
    Object
- NULL과 undefined의 차이
    값을 할당하지 않은 변수 = undefined
    어떠한 값이 비어있음을 의도적으로 표현 = null

- let, const, var
  - var : ES6명세 이전부터 사용되던 선언으로, 변수 선언 시 사용, 굉장히 유연함. 유연하다는 것은 장점이 될 수도 있지만 오류를 발생시킬 확률이 높다는 뜻도 됨.
  - let : ES6명세 이후 추가된 변수 선언법. 앞으로 스터디 진행 시 변수선언은 let으로 할 것
  - const : ES6명세 이후 추가된 상수 선언법. 재할당과 재선언이 모두 불가능함.
    * const는 상수선언이지만, 초기값이 객체일 경우 재할당은 불가는하지만 객체를 변형하거나 새로운 property를 추가하는 동작은 수행가능함. 따라서, 객체를 할당할 경우 const를 사용하여 선언함
  
- array
    초기값을 할당하면서 배열 선언하기
    let arrExample = ['문한규', '바보'];
    빈 배열 선언하기
    let arrExample = new Array();
    *배열 요소에 접근하기*
    console.log(arrExample[0])
    자세한 내용 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
- Object
    콜론으로 나뉘어져 있는 키와 값으로 구성된 자료구조
    초기값이 할당된 Object의 선언
    const objExample = {
        "문한규":"바보",
        "key2":"value1"
    }
    * 콜론 왼쪽이 key값, 오른쪽이 value값이며 key값은 문자열이여야하고, value값은 어떤 타입이던 올 수 있음.
    * 키값은 중복될 수 없으나 value값은 중복 가능함.
    
    비어있는 객체 선언
    const objExample = new Object()
    자세한 내용 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

- 조건문
    if - else 문
    문법
    if (condition) {
        statement
    }
    else if (condition) {
        statement
    }
    else {
        statement
    }
- 반복문
    for문
    for ([initialization]; [condition]; [final-expression]) {
        statement
    }
    example
    for (i=0; i< 5; i++){
        console.log(i);
    }