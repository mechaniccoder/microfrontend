## Micronfrontend 주의할 점

### Zero-coupling between apps

- 앱끼리 의존성이 있을 경우, 하나를 변경할때 다른 하나도 변경해야만 하기 때문에, 반드시 의존성을 없애자.

### A few coupling between app and container

- render를 담당하는 함수를 container에서 사용하는 방식을 활용한다.

### Handling CSS

- projects의 css 충돌을 막아야 스타일 에러를 잡을 수 있다.
- css-in-js 라이브러리를 사용한다면 production prefix를 설정을 하자.

### Navigator between apps

- container에는 BrowserRouter, sub-apps에서는 Memory Router를 설정한다.
- container의 browser history와 sub-apps의 memory history에서 오는 이슈가 있다. 따라서 memory history와 container의 browser history의 동기화를 설정해줘야 한다.
- container browser history 변경 -> sub-app memory history에 반영
- sub-app memory history 변경 -> container browser history 반영

### Public path between sub-apps

- sub-app에서 public path를 항상 조심히 설정해야한다.
- remoteEntry.js, main.js(webpack output)의 경로는 sub-app이 isolation하게 돌 때랑, container와 함께 돌때 충돌이 일어날 수도 있다.
- 따라서, publicPath를 정확히 명시해주도록 하자.

### Authentication

- authentication logic을 centralizing하는 방법
