# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
---
## 페이지 구조
URL: `/boards`
### UI 구성
- 상단: 게시글 입력 폼
- 중단: 게시글 목록(제목만 표시)
- 하단: 각 게시글 클릭 시 상세 페이지로 이동
### 객체 구조
게시글 객체

javascript
{

  id: number,

  title: string,

  content: string

}
### 기능 요구사항
- 게시글 입력 폼(1번 UI):

title과 content를 입력받는 폼 구현

제출 버튼을 눌렀을 때 게시글 생성, 목록에 추가

- 게시글 목록(2번 UI):

제목만 표시

클릭 시, 해당 게시글의 상세 페이지로 이동

상세 페이지에서 제목, 내용, 수정 및 삭제 버튼 제공
### 상세 페이지 기능
- 상단: 제목 표시
- 중단: 내용 표시
- 하단: 수정 및 삭제 버튼

수정 버튼 클릭 시 현재 페이지에서 수정 가능

삭제 버튼 클릭 시 게시글 삭제 후 `/boards`로 이동