# Movie Search Project 🏅

[React 9기] React 입문주차 개인과제로 메달 집계를 관리하는 프로젝트입니다..  

## 🛠️ 기술 스택 

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)


## ✨ 기능 

#### 모든 CRUD 기능은 로컬 스토리지(localStorage)와 연동되어, 페이지를 새로고침해도 데이터가 유지됩니다.

### ➕ 새로운 국가 추가

#### 기능 설명  
- 각 입력 필드에 값을 입력한 후 Add 버튼을 클릭하면, 새로운 국가와 메달 정보가 저장됩니다.
- 이미 등록된 국가일 경우, 업데이트를 요청하는 알림이 표시됩니다.

#### 문제 상황
- form 태그 내에 있는 버튼 2개에 어떻게 접근할 것인가...?
  [onSubmit을 통해 클릭한 요소 알아내기](https://dlawi0108.tistory.com/45)
  
<br/>

![add](https://github.com/user-attachments/assets/174b3209-ff41-42bf-b577-d2a1e761473a)

### ♻️ 기존 국가 데이터 갱신

#### 기능 설명  
- 사용자가 변경한 값을 입력 후 Update 버튼을 클릭하면, 해당 국가의 정보가 업데이트됩니다.
- 등록되지 않은 국가일 경우, 등록을 요청하는 알림이 표시됩니다.

![update](https://github.com/user-attachments/assets/cbf39361-5bdf-463f-a0a7-bea4070247a7)

### ➖ 국가 삭제
- 각 국가 항목 옆에 삭제 버튼이 있어 사용자가 등록된 국가를 삭제할 수 있습니다.

![delete](https://github.com/user-attachments/assets/eb8c0b9e-ea66-4aa7-82a3-41c1ef22f3e1)

### 🏅 메달 정렬
- 사용자가 메달 목록을 금메달, 은메달, 동메달의 순서로 정렬할 수 있습니다.
- 정렬 기준에 따라 메달 리스트가 자동으로 업데이트되어, 사용자는 원하는 방식으로 메달 순서를 확인할 수 있습니다.
- 금메달 순, 은메달 순, 동메달 순으로 정렬하거나, 각 국가별로 메달 총합을 기준으로 정렬할 수 있는 기능이 제공됩니다.

#### 문제 상황
- 금메달과 총메달 수로 정렬은 간단하지만, 동률일 경우 어떻게 정렬할 것인지...?
  [금메달/총 메달 수 기준으로 정렬하기](https://dlawi0108.tistory.com/46)
  
  <br/>
  
![sort](https://github.com/user-attachments/assets/e3eeab7d-b305-4a87-a8f3-41fc7ad37c74)


## 🚀 배포 및 실행 
[Github Pages](https://imjaeone.github.io/OlympicMedalTracker/)

## 📝 느낀 점
이번 프로젝트를 통해 React에서의 상태 관리와 데이터 정렬 로직을 깊이 있게 이해할 수 있었습니다. 특히, 메달 정렬 알고리즘을 작성하며 여러 조건을 결합하는 로직 구현의 중요성을 배웠습니다.
