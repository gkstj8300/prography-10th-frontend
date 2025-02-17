# Prography 10th Frontend

---

## 📦 기술 스택

- **프레임워크 & 라이브러리**
  - React `18.2.0`
  - Styled-components
- **개발 환경**
  - TypeScript
  - ESLint
  - Prettier
  - React Scripts
  - Axios

---

## 🚀 프로젝트 실행 방법

### 1️⃣ **프로젝트 클론**

```sh
git clone https://github.com/gkstj8300/prography-10th-frontend.git
cd prography-10th-frontend
```

### 2️⃣ **패키지 설치**

```sh
npm install
```

### 3️⃣ **개발 서버 실행**

```sh
npm start
```

- `http://localhost:3000`에서 실행됩니다.

### 4️⃣ **프로덕션 빌드**

```sh
npm run build
```

- 최적화된 빌드 파일이 `build/` 폴더에 생성됩니다.

### 5️⃣ **ESLint & Prettier 적용**

```sh
npm run lint
```

- `ESLint`와 `Prettier`를 실행하여 코드 스타일을 자동 정리합니다.

---

## 📂 프로젝트 구조

```
prography-10th-frontend/
│── src/
│   ├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── pages/         # 페이지 단위 컴포넌트
│   ├── hooks/         # 커스텀 훅
│   ├── utils/         # 유틸리티 함수
│   ├── styles/        # 전역 스타일 관리
│   ├── App.tsx        # 메인 컴포넌트
│   ├── index.tsx      # React 렌더링 진입점
│
│── public/            # 정적 파일 (favicon, index.html 등)
│── .eslintrc.json     # ESLint 설정 파일
│── .prettierrc.js     # Prettier 설정 파일
│── package.json       # 프로젝트 의존성 및 스크립트
│── README.md          # 프로젝트 문서
```

## :computer: 커밋 메세지 컨벤션

```
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```
