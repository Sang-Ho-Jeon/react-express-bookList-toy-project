# 📚 Final Project: React & Express 기반 책 리스트 Toy Project

### **소개**
이 프로젝트는 **React**와 **Express**를 기반으로, **책 리스트 관리 기능**을 제공하는 간단한 **Toy Project**입니다.  
프런트엔드는 **React**를 활용해 UI 컴포넌트를 작성하고, **Vite**를 사용하여 경량화된 개발 환경을 구성했습니다.  
백엔드는 **Express**를 사용하여 RESTful API를 구현하고, 클라이언트와 데이터를 주고받는 역할을 수행합니다.

---
## 🛠️ **기술 스택**
- **Frontend**: React, Vite, JavaScript
- **Backend**: Node.js, Express
- **Database**: JSON 파일 또는 임시 데이터

---

## 🚀 **설치 및 실행**
### 1️⃣ **백엔드 실행**
```bash
# 서버 디렉토리로 이동
cd final-project-server-main

# 의존성 설치
npm install

# 서버 실행
npm start
```

---

### 2️⃣ **프런트엔드 개발 환경 시작**
```bash
# 프런트엔드 디렉토리로 이동
cd react-final-project

# 의존성 설치
npm install

# Vite 개발 서버 시작
npm install

# Vite 개발 서버 시작
npm run dev
```

---

## 📖 **기능**
- 📋 **책 추가**: 새로운 책 정보를 입력하여 목록에 추가.
- 🗑️ **책 삭제**: 선택한 책을 목록에서 제거.
- 🔍 **책 조회**: 등록된 모든 책 목록을 확인.

## 📂 **프로젝트 구조**
```plaintext
final-project/
├── final-project-server-main/    # 백엔드 서버 코드
│   ├── server.js                # Express 서버 엔트리
│   ├── routes/                  # API 라우트 관리
│   └── models/                  # 데이터 모델
├── react-final-project/         # 프런트엔드 코드
│   ├── src/
│   │   ├── components/          # React 컴포넌트
│   │   ├── pages/               # 페이지 단위 컴포넌트
│   │   └── App.js               # 메인 엔트리
└── README.md                    # 프로젝트 설명 파일
```

---

## 💡 **주의 사항**
1. 서버와 클라이언트가 서로 다른 포트(`5000`과 `3000`)에서 실행됩니다.
2. 두 환경의 의존성을 반드시 설치한 뒤 실행하세요. (`npm install`)