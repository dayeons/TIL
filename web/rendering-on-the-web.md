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

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*jJkEQpgZ8waQ5P-W5lhxuQ.png">

출처: [The Benefits of Server Side Rendering Over Client Side Rendering](https://web.dev/articles/rendering-on-the-web?hl=en)

# CSR (Client Side Rendering)

- 클라이언트 측에서 렌더링 하는 방식
- 유저와 상호작용이 많다
- 서버에서 필요한 데이터를 한 번에 받아오고 받은 데이터를 브라우저가 주체가 되어 그린다.
- CSR은 SPA트랜드와 CPU 성능 상승 + JS 표준화(리액트, 뷰, 앵귤러 등 프레임워크의 발전)와 함께
- 성능적으로도 페이지를 새로 랜더링하지 않아 서버자원을 덜 사용하고, 새로고침이 발생하지 않기 때문에 화면이 바뀔 때 화면 깜빡임도 없이 우수한 사용자 경험을 제공한다.

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*CRiH0hUGoS3aoZaIY4H2yg.png">

출처: [The Benefits of Server Side Rendering Over Client Side Rendering](https://web.dev/articles/rendering-on-the-web?hl=en)
