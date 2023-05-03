# 23-React1 김솔빈
---
# 4/27 병결 
## 9 주차 4/27 
#### 8장 이벤트 처리하기
* DOM에서 클릭 이벤트 처리
* React에서 클릭 이벤트 처리
##### 차이점
* 1. 이벤트 이름이 카멜방식으로 바뀜 (onclidk -> onClick)
2. 전달하려는 함수는 문자열에서 함수 그대로 전달 (activate() -> activate)

* 이벤트 핸들러(Event Handler) : 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수 이벤트가 발생하는 것을 계속 듣고 있다가는 의미로 이벤트 리스너(Event Listener) 라고도 부름

* 이벤트 핸들러 추가하는 방법
```
1. 버튼을 클리갛면 이벤트 핸드럴 함수인 handleClick() 호출  
2. bind를 사용하지 않으면 this.handleClock은 글로벌 스코프에서 호출되어, undefined로 사용할 수 없기 때문에
3. bind를 사용하지 않으려먼 화살표 함수를 사용하는 방법도 있다. ( => )
클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 참고만.
```
 이벤트 핸들러 추가 코드
``` js
  function Toggle(props){
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법 1. 함수 안에 함수로 정의
  function handleClick(){
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 방법 2. arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐"}
    </button>
  );
}

// 함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지 이다.
// 함수형에서는 this 를 사용하지 않고 onClick에서 바로 handleClick을 넘긴다
```
#### Arguments 전달하기
* 함수를 정의할 때는 Parameter 혹은 매개변수,
* 함수를 사용할 떄는 Argument 혹은 인자라고 부른다
* 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많다.

```js
  <buttton onClick ={(event) => this.deleteItem(id,event)}>삭제 </button>
  <button oncClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
* 동일한 역할을 하지만 하나는 화살표 함수, 다른 하나는 bind를 사용
* event라는 매개변수는 리액트의 이벤트 객체를 의미
* 두 방법 모두 첫 매개변수는 id, 두 번째 매개변수로는 event가 전달
* 첫 번째 코드는 명시적으로 event를 매개변수로 넣어주고,
두 번째 코드는 id이후 두번째 매개변수로 event가 자동 전달

```js
  // 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달할 때
function MyButton(props){
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  };
  return (
    <button onClick={(event) => handleDelete(1,event)}>삭제하기</button>
  );
}

```

### 9장
#### 조건부 렌더링
* 조건 : 조건문의 조건
```js
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```
* props로 전달 받은 isLoggedln이 true이면 을, false면 을 return
이과 같은 렌더링을 조건부 렌더링이라 한다.

#### 엘리먼트 변수
* 엘리먼트 변수 : 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법

```js
  // state에 따라 button변수에 컴포넌트의 객체를 저장하여 return문에서 사용
function LoginControl(porps){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick=() => {
    setIsLoggedIn(true);
  }

  const handleLogOutClick=() => {
    setIsLoggedIn(false);
  }

  let button;
  if(isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {button}
    </div>
  );
}
```
#### 인라인 조건
* 필요한 곳에 조건문을 직접 넣어 사용하는 방법
1 .인라인 if
* if문을 사직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용
* &&는 and연산자로 모든 조건이 참일때만 참이 된다
* 단축평가 : 첫 조건이 거짓이면 두번째 조건은 판단할 필요가 없다
2.인라인 if-else
* 삼항 연산자를 사용한다. [ 조건문 ? 참일 경우 : 거짓일 경우 ]
* 문자열이나 엘리먼트를 넣어서 사용할 수 있다.

```js
  // 문자열
function UserStatus(props){
  return(
    <div>
      이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}<b> 상태입니다.
    </div>
  )
}

----
// 엘리먼트
function LoginControl(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick() => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  
  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {isLoggedIn 
      ? <LogoutButton onClick = {handleLogoutClick} /> 
      : <LoginButton onClick = {handleLoginClick} />}
    </div>
  )
}
```



#### 컴포넌트 렌더링 막기

```js
function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handledToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning); 
  }

  return (
    <div>
      <WarningBanner warning = {showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  )
}

```

### 10장
#### 리스트와 키
* 리스트 : 목록
배열 : 리스트를 사용하기 위한 자료구조
배열 : js의 변수나 객체를 하나의 변수로 묶어놓은 것
* 리스트 : 자료형 없음
ex) 파이썬 : 배열 존재X, 리스트 O

## 7주차 4/13
#### 훅이란 무엇인가?
* 클래스형 컴포넌트에서는 생성자에서 state를 정의하고 setState()함수를 통해 state를 업데이트함
* 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나 , 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음.
* 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook) 임
* 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현 할 수 있게 되었음
* Hook이란 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미
* 훅의 이름은 모두 'use'로 시작
* 사용자 정의 훅을 만들 수 있으며 , 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작할 것을 권장

* useState 사용방법
``` js
import React,{useState} from 'react'

function Counter(props){
  const [count,serCount] = useState(0);
  // [변수명 , 함수]
}
```
### useEffect
* useState와 함께 가장 많이 사용하는 Hook
* 이 함수는 사이드 이펙트를 수행하기 위한 것
* 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
* 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며 , 렌더링 중에는 작업이 완료될 수 없기 때문임 . 렌더링이 끝난 이후에 실행되어야 하는 작업들임
* 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공
* useEffect(이펙트 함수, 의존성 배열);
* 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열안에 있는 변수 중에 하나라도 값이 변경되었을때 이펙트 함수가 실행된다
* 처음 컴포넌트가 렌더링 된 이후 , 그리고 재 렌더링 이후에 실행된다
* 만약 만우트와 언마우트 될 때만 한번씩 실행되게 하고 싶으면 빈배열을 넣으면 된다.
(props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러번 실행되지 않는다)
* 의존성 배열을 생략하는 경우는 업데이트 될대마다 호출함

### useMemo
* useMemo()혹은 Memoizde value를 리턴하는 훅
* 이전 계산 값을 갖고 있기 때문에 연산량이 높은 작업의 반복을 피할 수 있음
* 이 훅은 렌더링이 일어나느 동안 실행됨
* 따라서 렌더링이 일어나는 동안 실행되어서는 안될 작업을 넣으면 안된다.
* ex ) useEffect 사이드 이펙트 등


### useCallback
* useCallback() 훅은 useMemo()와 유사한 역알을 함
* 차이점은 값이 아닌 함수를 반환한다는 점
* 의존성 배열을 파라미터로 받는 것은 useMemo와 동일함
* 파라미터로 받은 함수를 콜백이라고함
* useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수 반환

``` js
  const memoizedCallback = useCallback(
    () => {
      doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1 , 의존성 변수2]
  );
```

### useRef
* uesRef() 훅은 레퍼런스를 사용하기 위한 훅
* 레퍼러스 = 특정 컴포넌트에 접근할 수 있는 객체
* useRef() 훅은 바로 이 레퍼런스 객체를 반환
* 레퍼넌스 객체에는 .current 라는 속성이 있는데 , 이것은 현재 참조하고 있는 엘리먼트를 의미함
```js
  const refContainer = useRef(초기값);
```
* 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지된다.
* 즉 , 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미다.

### 훅의 규칙
* 무조건 최상의 레벨에서만 호출해야함
* 반복문이나 조건문 또는 중첩된 함수들안에서 호출하면 안된다
* 컴포넌트가 렌더링 될 때마다 같은 순서로 호출 되어야함
* 리액트 함수 컴포넌트에서만 훅을 호출해야함
* 자바스크립트 함수에서 훅을 호출하면 안된다
* 리액트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출 가능

### 커스텀 훅 추출
* 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을때 새로운 함수를 하나 만드는 방법을 사용
* 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있음
* 이름을 use로 시작하고 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 된다

---
## 5~6장 6주차 4/6
### State 란?
* State는 리액트 컴포넌트의 상태를 의미
* 상태의 의미는 정상인지 비정상인지가 아닌 (컴포넌트의 데이터)를 의미
* 정확히는 컴포넌트의 (변경가능한 데이터)를 의미합니다.
* State가 변하면 다시 렌더링이 되기 떄문에 렌더링과 관련된 값만 state에 포함시켜야함

```js
  //state 잘못된 사용법 (state를 직접 수정함)
  this.state={
    name:'Inje'
  }

```
### 생명주기
* 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는것

* constructor가 실행되면서 컴포넌트 생성
* 생성 직후 conponentDidMount() 함수가 호출됨

### State의 특징
* 리액트 만의 특별한 형태가 아닌 단지 (자바스크립트 객체)일 뿐

### (실습) 댓글 컴포넌트 만들기
##### /src/chapter_05
* CommentList.js파일처럼
* 별도의 객체로 받아 컴포넌트에서는 이것을 분리하여 출력하도록 해야함
* 이떄 사용하는 함수가 map()함수

## 되세기기
### 컴포넌트 추출 2
* 복잡한 컴포넌트를 쪼개 여러개의 컴포넌트로 나눌 수 있음
* 큰 컴포넌트에서 일부를 추출해 새로운 컴포넌트를 만듬
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는게 좋음
* 처음에 비해 가독성이 높아짐 

#### 리액트 컴포넌트
* 컴포넌트 기반구조
#### Props 에 대해 알아보기 2
##### 개념 
* props는 prop(property : 속성 특성)의 줄인말
* 이 props가 바로 컴포넌트의 속성
* 컴포넌트에 어떤 속성 props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력된다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체

##### 특징
* 읽기 전용 (변결할수 없음)
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.

###### Pure 함수 Impure 함수
* Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* Inpure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

##### 사용법
* JSX 에서는 key - value 쌍으로 props를 구성

---
## 4장 5주차 3/30
### 엘리먼트 렌더링
#### 엘리트먼트 정의
* 엘리먼트란 리엑트 앱을 구성하는 요소를 의미
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명함
* 웹사이트의 경우는 DOM 엘리먼트이면 HTML요소를 의미함

#### 리엑트 엘리먼트와 DOM 엘리먼트의 차이 
* React 엘리먼트는 일반 객체로 쉽게 생성할 수 있음 
* React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트함
#### 엘리먼트의 생김새
* 리엑트 엘리먼트는 자바스크립트 객체의 형태로 존재
* 컴포넌트 (버튼 등) ,  속성 (컬러 등) 및 내부의 보던 칠드런을 포함하는 js객체
* 이 객체는 마음대로 변경할수 없는 불변성을 가지고 있음
#### 엘리먼트의 특징
* 가장큰 특징은 불변성  
한 번 생성된 엘리먼트의 자식이나 속성을 바꿀 수 없음

#### 만일 내용이 바뀐다면?
* 컴포넌트를 통해 새로운 엘리먼트 생성
* 그 다음 이전 엘리먼트와 교체
* 교체 작업을 위해 Virtual DOM을 사용

#### 엘리먼트 렌더링 하기
Root DOM node
<//div id="root"><//div> 필수코드

#### 렌더링된 엘리먼트 업데이트하기
tick 함수와 element 사용  
tick 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링함  
setlnterval()함수를 이용해 위에서 정의한 tick()를 1초에 한번씩 호출함 즉 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것  
chapter_04/clock.html , clock.jsx 참고

#### 컴포넌트에 대해 알아보기
* 리액트는 컴포넌트 기반의 구조를 가짐
* 컴포넌트 구조란 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미
* 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있음
* 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 비슷함
* 다만 입력과 출력은 Props가 담당하고 , 출력은 리액트 엘리먼트의 형태로 출력됨
* 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷함

#### Props 에 대해 알아보기
##### 개념 
* props는 prop(property : 속성 특성)의 줄인말
* 이 props가 바로 컴포넌트의 속성
* 컴포넌트에 어떤 속성 props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력된다.
* props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체

##### 특징
* 읽기 전용 (변결할수 없음)
* 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.

###### Pure 함수 Impure 함수
* Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수
* Inpure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수

##### 사용법
* JSX 에서는 key - value 쌍으로 props를 구성

#### 컴포넌트 만들기
##### 컴포넌트의 종류 (함수형 , 클래스형)
* 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용함
* 이후 Hook 이라는 개념이 나오면서 함수형 컴포넌트를 주로 사용함
* 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하기 때문에 클래스형 컴포넌트와
컴포넌트의 생명주기에 관해서도 공부해야함

##### 컴포넌트 이름짓기
* 대문자로 시작 (리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문)
* 컴포넌트 파일 이름과 컴포넌트 이름은 같게 해야함 

##### 컴포넌트 렌더링

##### 컴포넌트 추출
* 복잡한 컴포넌트를 쪼개 여러개의 컴포넌트로 나눌 수 있음
* 큰 컴포넌트에서 일부를 추출해 새로운 컴포넌트를 만듬
* 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는게 좋음

---
## 3장 4주차 3/23

### git react 연동하기
* README.md 백업
* local에 있는 저장소 이름 바꾸기/삭제
* 새 프로젝트 생성
* REAME.me
* GitHub 저장소 삭제
* 로컬에서 23-React1 푸쉬
* GitHub 저장소 확인

* (Source Controll에서 퍼블릭 누르고 생성하기)
### JSX란
* JavaScript의 모든 기능이 포함되어 있음
* JSX는 표현식이다 (if 나 for 문 사용 가능)
* 태그에 닫는 태그가 반드시 있어야함
* Babel이 JSX 코드를 자바스크립트 형태로 바꿔줌
### JSX의 역할
* 내부적으로 XML/HTML 코드를 자바스크립트로 변환
* react가 createElement 함수를 사용해 자동으로 자바스크립트로 변환해줌
* 결과적으로 JSX는 가독성을 높여주는 역할을 함
### JSX의 장점
* 코드가 간결해 짐
* 가독성 향상
* Injection Attack 이라 불리는 해킹 방법을 방어함으로써 보안에 강함
### JSX 사용법
* 모든 js 문법을 지원
* js문법에 XML과 HTML을 섞어서 사용함
* html이나 xml에 js코드를 사용하고 싶으면 {}사용



---
## 3장  3주차 3/16

### 리엑트 시작하기
https://ko.reactjs.org/
문서 -> CDN 링크(헤더나 바디끝나는 위쪽에 복붙)
웹사이트에 React 추가하기

### React 추가 방법
* 1단계: HTML 파일에 DOM 컨테이너 설치

* 2단계: 스크립트 태그 추가하기

* 3단계: React 컴포넌트 만들기

### npx npm
* 폴더생성 후 vs code 킴
* 터미널에 npx create-react-app myApp
* 생선된 myApp 폴더로 킨 후 터미널에 npx start

### node 해결법
* npm install -g create-react-app@latest
---
## 2장
### README.md 작성요령
* 이름:h1
* 강의날자:h2
* 학습내용(필수):h2이하
* 작성코드(선택)
* 최근 내용이 위로
* 날자 별 구분
---
## 리엑트 장점

### 빠른 업데이트와 렌더링속도

(동기식 비동기식 : 서버랑 같이 움직이는지 아닌지)<br>
동기식 : 메뉴 클릭시 그쪽에 있는 파일을 그대로 다운로드<br>    
비동기식 : 메뉴 클릭시 변화가 있는곳만 렌더링함  
DOM : 동기식 Virtual DOM : 비동기식  
### 컴포넌트 기반 구조 
* 재사용성이 뛰어남
* 모든 페이지는 컴포넌트로 구성
* 하나의 컴포넌트는 다른 여러개의 컴포넌트의 조합으로 구성할 수 있음
* 블록을 조립하는 것처럼 컴포넌트를 조합해 웹개발  

### 재사용성
* 반복적인 작업을 줄여 생산성 높임
* 유지보수 용이
* 재사용이 가능 하려면 해당 묘듈의 의존성이 없어야함

### 든든한 지원군
* 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있음

### 활발한 지식 공유 & 커뮤니티
<br>

### 모바일 앱 개발가능
---

## 리엑트 단점

* ### 방대한 학습량

* ### 높은 상태 관리 복잡도
---



## 1~2 주차 3/9

### 자바스크립트의 자료형
### 자바스크립트의 연산자
* let a = 2, let b = 4
* console.log(a+b) : 6
* console.log(a / b) : 0.5
* console.log(a % b) : 2
* console.log(a ** b) : 16
---
* let a = 1; let b = a++
* console.log(a,b) : 2, 1
* let c = 1, let d = ++c
* console.log(c, d) : 2, 2
---
* let a = 1, let b = '1'
* console.log(a === b) : false


---
## 복습 및 공부
##### 챕터3 복습

Cook.jsx 에서 어떤 글을 출력할지 정하고
Clibray.jsx 에서 변수 ? 속성 ? 에 들어가는 값을 지정


Cook.jsx
``` js

import React from "react";
const Cook=(props) =>{

    return(
    <div>
    <h1>{`이 과자의 이름은 ${props.name}입니다`}</h1>
    <h1>{`이 과자의 가격은 ${props.money}입니다`}</h1>
    </div>
    )
}
export default Cook 
//const Cook=(props) props (속성 ex( Cook.name 이런 느낌으로 props.name ~ 등 사용)


```
Clibray.jsx
```js

import Cook from "./Cook";

const Clibrary = (props) => 
{
    return(
        <div>
            <Cook name="치토스" money="1400"></Cook>
            <Cook name="콘칩" money="1200"></Cook>
            <Cook name="포테토칩" money="1300"></Cook>
        </div>
    )
}

export default Clibrary

// Cook.jsx 를 임포트 하여 안에 값을 지정 index.js 에서는 Clibrary를 호출해야함

```

##### 챕터5 시계 복습 (생명주기)
##### 초당 업데이트 // 실시간 
1초당 반복하는 생명주기에 핵심 함수
```js
 setInterval(Tick, 1000);
```

Clock.jsx 
```js

import React from "react";
import ReactDOM from "react-dom/client";

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock
```
clock.jsx 만으로도 실행이 되지만 실행이 되었을떄의 시간만 나온다.  
자동으로 시간을 업데이트 하기 위한 jsx 파일을 추가  
Tick.jsx
```js
import React from "react";
import ReactDOM  from "react-dom";
import Clock from "./Clock"
function Tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(Tick, 1000);

export  default Tick
```
참고한 홈페이지 https://narup.tistory.com/189
//5의 배수를 제외한 카운터 등 생명주기 이벤트 등


setInterval 함수 

카운터.jsx
```js
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    let countRef = useRef(0);
    useEffect(()=>{
        setInterval(() => {
        setCount(countRef.current += 0.5);
        }, 1000)
    },[])
    return (
      <>
        <h1>카운트 : {count}</h1>
       
      </>
    );
  }

  export default Counter
```
카운트다운.jsx
```js
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function CountDown() {
    let [count, setCount] = useState(100);
    let countRef = useRef(100);
    useEffect(()=>{
      setInterval(() => {
        
        setCount((countRef.current -= 0.5));
      }, 1000);
    },[])
  return (
    <>
      <h1>카운트다운 : {count}</h1>
     
    </>
  );
  }

  export default CountDown
```

## 소스코드 공유
https://github.com/soaple/first-met-react-practice/tree/master/src