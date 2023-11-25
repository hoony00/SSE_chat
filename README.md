# Spring Boot 다중 익명 채팅방 서비스

이 프로젝트는 Spring Boot와 SSE (Server-Sent Events) 프로토콜을 활용하여 다중 익명 채팅방을 구현한 예제입니다. 이 프로젝트는 HTTP의 단점을 극복하며, 서버-DB-클라이언트 간의 1:N 통신 모델을 구현하고 있습니다. MongoDB를 데이터베이스로 사용하였습니다. <p>
![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/962df721-8794-4601-bb6e-f8df69380d34.png)


------

### 채팅 멤버 
![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/e04ae2bb-0964-4ac8-af55-c7ce59aa1100.png)
### 채팅 화면
![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/1a6178c0-5905-4b2c-8315-83c85b7b2827.png)
![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/26c6127a-0c7f-49bd-81cf-bbecbdd8eac5.png)



### 주요 기능 및 특징
- 채팅방 번호 기반 자유로운 다중 채팅: 사용자는 채팅방 번호를 기반으로 원하는 채팅방에 들어갈 수 있으며, 원하는 채팅방을 생성할 수도 있습니다. 이를 통해 자유로운 채팅 환경을 제공합니다.
- SSE 프로토콜 사용: Server-Sent Events (SSE) 프로토콜을 활용하여 실시간으로 메시지를 클라이언트에 전송합니다.
- 웹 서버와 @tailable 기능을 활용하여 다수의 클라이언트와 실시간으로 연결.
- Flux를 통해 자연스러운 대화 환경을 웹에서 제공.

### 기술 스택
- Spring Boot
- Server-Sent Events (SSE)
- MongoDB
- HTML, CSS
- JavaScript


### 시스템 구성도
![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/ffb8f010-9420-402c-922c-7f62e887c555.png)

- - -

### Flux
Flux는 Reactor 프로젝트에서 제공하는 리액티브 프로그래밍 패러다임을 구현한 리액티브 스트림 라이브러리입니다. 이 패러다임은 비동기 데이터 스트림 처리에 적합하며, 이벤트 기반 및 실시간 애플리케이션에서 특히 유용합니다.

Flux의 핵심 개념은 데이터를 비동기적으로 처리하는 Publisher-Subscriber 모델을 기반으로 합니다. Publisher(발행자)는 데이터를 생성하고 Subscriber(구독자)는 해당 데이터를 구독하며 처리합니다. 이러한 방식으로 데이터가 생성될 때마다 Subscriber에게 푸시되어 처리됩니다. Flux는 이러한 리액티브 스트림 처리를 지원하는데, 이것은 실시간 채팅 애플리케이션과 같이 데이터의 스트림을 다루는 데 적합한 패러다임입니다.

### @tailable
@tailable은 MongoDB에서 제공하는 기능 중 하나로, 컬렉션에 대해 지속적으로 대기하면서 변경 사항을 감지할 수 있도록 해줍니다. 이 기능을 사용하면 실시간 데이터 스트림을 생성하고, 데이터가 변경될 때마다 해당 변경 사항을 캡처할 수 있습니다.

이를 스프링 데이터 MongoDB와 결합하면 실시간 업데이트가 필요한 애플리케이션에서 유용하게 사용됩니다. 주로 채팅 애플리케이션과 같이 실시간 업데이트가 필요한 상황에서 활용됩니다.

- - -

## 프로젝트에 적용된 방식
이제 Flux와 @tailable이 이 프로젝트에 어떻게 적용되었는지 설명해보겠습니다.

Flux의 활용: 실시간 채팅 애플리케이션에서, 사용자가 메시지를 입력하면 이 메시지는 Flux를 통해 메시지 스트림에 발행됩니다. 채팅방에 있는 다른 사용자는 이 스트림을 구독하고 있으며, 새로운 메시지가 도착할 때마다 실시간으로 메시지를 수신합니다.

@tailable 커서: MongoDB의 @tailable 커서를 사용하여 채팅 메시지 컬렉션을 지속적으로 모니터링합니다. 이 커서를 통해 데이터베이스에 새로운 메시지가 추가될 때마다 해당 변경 사항을 감지하고, 이를 Flux로 변환하여 클라이언트에게 전달합니다. 이를 통해 실시간으로 메시지를 수신하는 기능을 구현했습니다.

이렇게 Flux와 @tailable을 조합하여 사용자가 실시간으로 채팅 메시지를 주고받을 수 있는 환경을 만들었습니다. 이 프로젝트는 이러한 기술을 활용하여 HTTP의 단점을 극복하고, 사용자에게 더 나은 실시간 채팅 경험을 제공하는데 성공했습니다.

![image](https://github.com/hoony00/JSP_INHAtc_Web/assets/86902854/85580c07-0868-4df3-bf14-daa396cea50f.png)

