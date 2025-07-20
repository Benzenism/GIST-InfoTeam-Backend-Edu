조건
 - DB를 연결하지 않은 상태로 기본적으로 json 더미 데이터가 있다고 가정하고 CRUD작성
 - 3 layer 중 Controller & Service 를 나눠서 작성할 것 (Repository는 나중에 사용)
 - DTO를 필수적으로 사용할 것 + (DTO Validation도 필수적으로 사용할것)

1. 게시글 생성 API
POST    http://localhost:3000/boards/
body
{
  "title": "sample1",
  "content": "SAMPLE!",
  "userId": "userSample"
}

2. 게시글 업데이트 API
PATCH   http://localhost:3000/boards/ID
body
{
  "title": "sample1Fixed",
  "content": "SAMPLE!Fixed"
}

3. 게시글 삭제 API
DELETE  http://localhost:3000/boards/ID

4. 게시글 조회 API (조회 API는 게시글 ID , 작성한 유저의 ID 2개의 조건으로 조회할수 있어야 함(API가 2개여도 무관))
 - 게시글 전체 조회
GET     http://localhost:3000/boards/
 - Id(게시글)로 조회
GET     http://localhost:3000/boards/ID
 - userId로 조회
GET     http://localhost:3000/boards/?userId=USERID