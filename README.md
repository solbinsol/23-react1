# 23-React1 김솔빈
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


