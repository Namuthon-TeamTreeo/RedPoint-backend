## 시작하기
아래 명령어를 실행합니다.
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase emulators:start --only functions
```

## 접속하기
마지막 명령어를 쳤을 때 나오는 명령어를 확인하고, 로컬 테스트 url을 얻어 포스트맨에서 테스팅을 진행합니다.

firebase login 때문에 아마도 제 계정이 아닌 다른 사람이 하면 안될 것 같습니다..

아래 엔드포인트로 포스트맨에서 바로 찔러보면 반환됩니다.

## APIs
### 1. 로드맵의 리스트를 반환하는 API (POST 요청)
   
https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/roadmap-list

body: {category: string}

### 2. 특정 로드맵의 상세 정보를 반환하는 API (POST 요청)

https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/roadmap-detail   

body: {category: string}

### 3. HTML 로드맵의 영상들을 반환하는 API (GET 요청)

https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/html-lecture   

### 4. Youtube API 엔드포인트를 반환하는 API (POST 요청)

https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI/api/lecture-youtube-link
body: {lectureId: number}

## 배포된 도메인
[https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI](https://asia-northeast3-fir-142cf.cloudfunctions.net/movieAPI)에 엔드포인트를 알맞게 입력하면 데이터가 전송됩니다. CORS 다 풀어놨어여..
