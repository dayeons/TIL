> 웹 렌더링이란 웹 페이지를 사용자가 볼 수 있는 형태로 변환하는 프로세스를 의미.
> 렌더링 방식에 따라 로딩 속도, 검색 엔진 최적화(SEO), 사용자 경험 등이 달라진다.

# SPA vs MPA (웹 애플리케이션 특징)

## Single Page Application(SPA)

하나의 브라우저 내에서 동작하는 애플리케이션이며 사용하는 동안 페이지 로딩을 필요로 하지 않는다.
Gmail, Google Maps, Facebook, Github 등이 해당.  
모든 SPA 들의 브라우저에 자연스러운 환경을 모방하려 하며, 훌륭한 UX를 제공하면서 페이지 리로드가 없으며, 별도의 기다리는 시간도 없다.
SPA는 마크업과 데이터를 각각 요청 후, 브라우저에서 바로 페이지를 그린다.  
AngularJS, Ember.js, Meteor.js, Knockout.js와 같은 진보한 javascript 를 이용하여 작업을 진행

## Multi Page Application(MPA)

멀티페이지 애플리케이션들은 브라우저에서 변경사항이 있을 때 서버로 서브밋 데이터를 전달하여 새로운 페이지 랜더링을 요청하고 그 데이터를 표시한다. MPA는 SPA 보다 규모가 더 크다.  
많은 컨텐츠로 인해, 많은 UI 레벨을 갖게 된다. AJAX 덕분에 우리는 크고 복잡한 애플리케이션들이 서버와 브라우저 사이에서 많은 데이터를 전송해야 하는 문제 없이 필요한 것만 데이터를 요청할 수 있다.

# SSR (Server Side Rendering)

- 클라이언트(브라우저)와 서버 간의 협력으로 이루어지는 프로세스
- 서버에서 브라우저에 보일 html파일을 미리 준비하여 응답해주는 형식
- 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식
- JSP/Serverlt 아키텍처
- 서버를 이용해서 페이지를 구성하기 때문에
  클라이언트에서 구성하는 [CSR](#CSR)보다 페이지를 구성하는 속도가 늦어지지만
  전체적으로 사용자에게 보여주는 콘텐츠 구성이 완료되는 시점은 빨라진다는 장점
  더불어 SEO(Search Engine Optimization) 또한 쉽게 구성
- SSR을 사용하면 프론트앤드 영역과 백엔드 영역을 완전희 분리함으로써 생산성을 높일 수 있다.
- 적절한 사용사례
  - 뉴스, 블로그, 포럼 등과 같은 컨텐츠 중심의 웹 사이트
  - 전자 상거래 플랫폼
  - 소셜 미디어 앱

[![출처: The Benefits of Server Side Rendering Over Client Side Rendering](https://miro.medium.com/v2/resize:fit:720/format:webp/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)](https://web.dev/articles/rendering-on-the-web?hl=en)

# CSR (Client Side Rendering)

- 클라이언트 측에서 렌더링 하는 방식
- 유저와 상호작용이 많다
- 서버에서 필요한 데이터를 한 번에 받아오고 받은 데이터를 브라우저가 주체가 되어 그린다.
- CSR은 SPA트랜드와 CPU 성능 상승 + JS 표준화(리액트, 뷰, 앵귤러 등 프레임워크의 발전)와 함께
- 성능적으로도 페이지를 새로 랜더링하지 않아 서버자원을 덜 사용하고, 새로고침이 발생하지 않기 때문에 화면이 바뀔 때 화면 깜빡임도 없이 우수한 사용자 경험을 제공한다.

[![출처: The Benefits of Server Side Rendering Over Client Side Rendering](https://miro.medium.com/v2/resize:fit:720/format:webp/1*CRiH0hUGoS3aoZaIY4H2yg.png)](https://web.dev/articles/rendering-on-the-web?hl=en)

## CSR 동작 방식

1. 브라우저가 index.html 다운로드
2. 자바스크립트 번들 파일 다운로드
3. API 요청 및 동적 컨텐츠 가져오기
   자바스크립트가 다운로드되면, 브라우저는 해당 파일을 해석하고 실행하게 되는데 AJAX나 Fetch API를 사용하여 서버로부터 동적 데이터를 가져오는 API요청을 수행. 이러한 API 요청을 통해 서버로부터 데이터를 받아고, 이 데이터를 파싱하여 웹 페이지에 동적으로 추가될 수 있는 형식을 가공
4. 최종 컨텐츠 렌더링
   API 요청을 통해 받은 데이터를 가지고, 자바스크립트는 웹 페이지의 최종 컨텐츠를 동적으로 생성.  
   브라우저는 이를 HTML DOM(Document Object Model)에 추가하여 랜더링
5. 페이지 이동 시 자바스크립트 재사용
   페이지 이동 시에는 전체 페이지를 다시 로드하는 것이 아니라 필요한 부분만을 엡데이트하여 사용자에게 빠른 반응성 제공

# 참고

[https://hooninedev.com/240409/](https://hooninedev.com/240409/)  
[https://im-developer.tistory.com/227](https://im-developer.tistory.com/227)
