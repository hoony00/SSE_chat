# Spring Boot 다중 익명 채팅방 서비스

이 프로젝트는 Spring Boot와 SSE (Server-Sent Events) 프로토콜을 활용하여 다중 익명 채팅방을 구현한 예제입니다. 이 프로젝트는 HTTP의 단점을 극복하며, 서버-DB-클라이언트 간의 1:N 통신 모델을 구현하고 있습니다. MongoDB를 데이터베이스로 사용하였습니다.

### 주요 기능 및 특징
## 다중 익명 채팅방: 여러 사용자가 다중 채팅방에 참여하여 메시지를 교환할 수 있습니다.

## SSE 프로토콜 사용: Server-Sent Events (SSE) 프로토콜을 활용하여 실시간으로 메시지를 클라이언트에 전송합니다.

## 익명 채팅: 사용자는 익명으로 채팅방에 참여할 수 있으며, 별도의 계정 등록이 필요하지 않습니다.

## MongoDB 데이터베이스: MongoDB를 사용하여 채팅 메시지를 저장하고 관리합니다.

### 기술 스택
- Spring Boot
- Server-Sent Events (SSE)
- MongoDB
- HTML, CSS
- JavaScript
