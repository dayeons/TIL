`성능 최적화 = 렌더링 최적화 + 로딩 최적화`

# 렌더링 최적화

렌더링 차단 리소스란 브라우저의 렌더링을 막는 소스들로 일반적으로 css와 js 파일을 말한다.(모든 css,js 렌더링 차단 리소스인 것은 아니다.)

> 웹 페이지 렌더링 최적화의 목표는 리플로우를 최대한 적게 발생시키면서, 빠르게 화면을 그리는 것

## CSS 최적화

### 리플로우, 리페인트(Reflow/Repaint)를 고려한 스타일 작성

`Javascript -> Style -> Layout -> Paint -> Composite`

- 브라우저의 스타일이 그려지는 순서. 이때 레이아웃의 넓이, 높이, 위치 등에 영향을 주는 css 속성을 변경할 경우 `Layout`부터 다시 그려지게 되는데 이를 **리플로우(또는 레이아웃)**라고 한다.
- 반면 레이아웃에 영향을 주지 않고 속성을 변경하면 레이아웃을 건너뛰고 페인트 작업부터 다시 수행하게 되는데 이를 **리페인트**라고 한다.
- 리플로우가 일어나면 브라우저가 전체 픽셀을 다시 계산해야 하기 때문에 되도록 리페인트 속성을 사용해 스타일을 작성하는 것이 성능면에서 좋다.
- 리플로우(Reflow)를 발생시키는 속성

  ```text
  position / width / height / margin / padding / display / top / left / right / bottom /
  box-sizing / border-color / text-align / border / border-width /
  font-family / float / font-size / font-weight / line-height / vertical-align /
  white-space / word-wrap / text-overflow / text-shadow ...
  ```

- 리페인트(Repaint)를 발생시키는 속성
  ```text
  color / border-style / visibility / background / background-color /
  background-image / background-position / background-repeat / background-size /
  text-decoration / outline / outline-style / outline-color / outline-width /
  border-radius / box-shadow ...
  ```
- 리플로우와 리페인트를 발생시키지 않는 속성
  ```text
  opacity / transform / cursor / z-index ...
  ```

### 사용하지 않는 css 제거

css는 렌더링 차단 리소스이기 때문에 사용하지 않는 css는 제거, Unused css는 구글 크롬 라이트하우스를 통해 확인 가능

- 개발자도구 - Lighthouse 탭에서 확인
- Performance와 Mobile에 체크한 후 Generate report 버튼을 클릭하면 해당 페이지 성능이 측정
- 2KB 이상 사용되지 않는 css가 있을 시 오류로 표기
- 조금 내려 목록을 보면 Remove unused CSS 항목을 확인
- Potential Savings 항목을 통해 잠재적으로 어느정도 절약 가능한지 보여준다.

### 간결한 스타일 작성

복잡한 셀렉터 사용은 지양한다. css가 복잡하고 방대할수록 레이아웃을 그리는 데에 시간이 많이 소요된다. 선택자를 간결하게 사용하여 특이성을 낮게 유지하는 것이 좋다.

## HTML 최적화

### 인라인 스타일을 사용하지 않는다.

- html 요소에 style을 통해 인라인 스타일을 작성하면 불필요한 코드 중복
- 인라인 스타일은 웹 페이지가 그려지면서 레이아웃에 영향을 미치면서 추가로 리플로우를 발생

### 복잡한 DOM 트리 지양

DOM 트리가 깊고, 자식 요소가 많을수록 DOM트리는 커진다.

# 참고

[웹 성능 최적화 방법 5분 완성](https://velog.io/@hsecode/%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-5%EB%B6%84-%EC%99%84%EC%84%B1)  
[렌더링 성능](https://web.dev/articles/rendering-performance?hl=ko)  
[렌더링 차단 CSS](https://web.dev/articles/critical-rendering-path/render-blocking-css?hl=ko)  
[async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)  
[css 전송 최적화](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery)  
[성능 최적화 (TOAST UI)](https://ui.toast.com/fe-guide/ko_PERFORMANCE)  
[defer, async 스크립트](https://ko.javascript.info/script-async-defer)  
[텍스트 기반 자산의 인코딩 및 전송 크기 최적화](https://web.dev/articles/optimizing-content-efficiency-optimize-encoding-and-transfer?hl=ko#text_compression_with_gzip)
