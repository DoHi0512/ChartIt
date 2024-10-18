# 그래프 그려주는 사이트 Chartit

- **배포 URL : [https://chart-it.vercel.app/](https://chart-it.vercel.app/)**
  <img width="1512" alt="스크린샷 2024-10-16 오후 10 37 39" src="https://github.com/user-attachments/assets/87dc17f1-8d68-490a-adab-616d8eca6c82">

<br>

## 프로젝트 소개

- Chartit은 그래프를 그리고, 이미지로 변환하는 서비스입니다.
- 사용자가 원하는 데이터를 다양한 형식의 그래프로 만들고, 이미지로 다운받을 수 있는 서비스가 있으면 좋겠다고 생각해 만들게 되었습니다.
  <br>

## 1. 개발 환경

- Front : Next.js 14, Tailwind, Supabase, Storybook
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : Vercel
  <br>

## 2. 채택한 개발 기술

### Next.js 14

- Next.js 14 app router 기반 SSR 개발
- middleware를 사용한 사용자 검증

### Tailwind

- 기본 class style 을 통한 개발 속도 향상
- sm, md, lg등의 반응형 속성을 통한 반응형 웹 서비스 개발
- custom style을 통한 색상 통일 및 코드 최적화

### Supabase

- Supabase Authentication을 사용한 github, google 로그인
- supabase table editor를 사용한 postgres 데이터베이스 사용

### Monorepo

- pnpm 을 사용한 모노레포 환경 구축
- Storybook을 사용한 컴포넌트 관리
