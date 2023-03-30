# 23-React1 김솔빈
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


