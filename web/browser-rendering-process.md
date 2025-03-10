# 브라우저의 로딩 과정

브라우저는 웹 페이지에 필요한 리소스를 내려받고 해석한 다음 여러 계산 과정을 거쳐 콘텐츠를 화면에 보여준다.
이를 브라우저의 로딩 과정이라고 하며 다운로드, 파싱, 스타일, 레이아웃, 페인트, 합성으로 나뉜다.

## 1. 파싱

브라우저에서 웹 페이지를 로드하면 가장 먼저 HTML 파일을 다운로드한다. 파싱은 다운로드한 HTML을 해석하며 **DOM 트리**를 구성하는 단계이다.  
파싱 중 `<script />`, `<link />`, `<img />`를 발견하면 각 리소스를 요청하고 다운로드한다.  
HTML 또는 리소스에 CSS가 포함된 경우에는 **CSSOM 트리**구성 작업도 함께 진행한다.

### DOM 트리 구성

[![출처: 객체 모델 구성](https://web.dev/static/articles/critical-rendering-path/constructing-the-object-model/image/dom-construction-process-a36eb7cf24ea1_856.png?hl=ko)](https://web.dev/articles/critical-rendering-path/constructing-the-object-model?hl=ko)

### CSSOM 트리 구성

[![출처: 객체 모델 구성](https://web.dev/static/articles/critical-rendering-path/constructing-the-object-model/image/dom-tree-827d5511a67a3_856.png?hl=ko)](https://web.dev/articles/critical-rendering-path/constructing-the-object-model?hl=ko)

## 2. 스타일

스타일 단계에서 파싱 단계에서 생성된 DOM, CSSOM 트리를 가지고 스타일을 매칭시켜주는 과정을 거쳐 렌더 트리를 구성한다.
[![출처: 렌더링 트리 생성, 레이아웃 및 페인트](https://web.dev/static/articles/critical-rendering-path/render-tree-construction/image/dom-cssom-are-combined-8de5805b2061e_856.png?hl=ko)](https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=ko)

## 3. 레이아웃

레이아웃 단계에서는 노드의 정확한 위치와 크기를 계산한다. 노드의 정확한 크기와 위치를 파악하기 위해 루트부터 노드를 순회하면서 계산하고, 레이아웃 결과로 각 노드의 정확한 위치와 크기를 픽셀값으로 렌더트리에 반영한다.  
만약 CSS에서 크기 값을 %로 지정하였다면, 레이아웃 단계를 거친 후 % 값은 계산되고 측정 가능한 픽셀 단위로 변환된다.

## 4. 페인트

이전 레이아웃 단계에서 계산된 값을 이용해 렌더트리의 각 노드를 화면상의 실제 픽셀로 변환한다. 이때 위치와 관계없는 CSS 속성(색상, 투명도 등)을 적용한다. 그리고 픽셀로 변환된 결과는 포토샵의 레이어처럼 생성되어 개별 레이어로 관리된다. 단, 각각의 엘리먼트가 모두 레이어가 되는 것은 아니다. `transform` 속성 등을 사용하면 엘리먼트가 레이어화 되는데, 이 과정을 페인트라고 한다.

## 5. 합성 & 렌더

페인트 단계에서 생성된 레이어를 합성하여 스크린을 업데이트한다. 합성과 렌더 단계가 끝나면 화면에서 웹페이지 볼 수 있다.
[![출처: Quantum 엔진 설명](https://user-images.githubusercontent.com/35218826/59728726-3553ee80-9276-11e9-9c6e-ac1ff99a01ee.png)](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/)

# 레이아웃과 리페인트

# 브라우저는 계층적 구조

- **User Interface**: 유저에게 시각적인 요소들과 함께 상호작용 하는 웹페이지를 의미  
  페이지뿐만 아니라 주소창, 홈버튼, 뒤로가기 버튼 등 여기에 포함
- **Browser Engine**: core component of every web browser로 User Interface 와 Rendering engine을 잇는 다리 역할  
  User Interface에서 오는 쿼리문들을 Rendering Engine에게 적절하게 분배
- **Rendering Engine**: 사용자의 화면에 HTML or XML, CSS, JS를 적절히 해석하여 최종 결과물을 생성하고 User Interface에 띄움, 렌더링 엔진은 사용하는 브라우저마다 다르다.
- **Networking**: HTTP, HTTPS, FTP 등을 통해 네트워크를 관리한다.
- **Javascript Interpreter**: 자바스크립트를 적절하게 Parsing하고 실행  
  자바스크립트 인터프리터의 최종 결과물이 생성되면 User Interface 최종 결과물이 렌더링
- **UI Backend**: User Interface의 OS 관련 내용이 저장되어 있는 관리소
- **Data Storage / Persisterce**: 웹 브라우저는 쿠키같은 내용을 지역적으로 관리할 필요가 존재  
  WebSQL, IndexedDB, FileSystem 등의 메커니즘을 이용해 데이터를 임시적/영구적으로 저장

## DOM Tree 형성

- **Parsing**
  문자열로 이뤄진 어떤 표현식을 컴퓨터가 이해할 수 있는 자료 구조 형태로 변경
  부모, 자식 관계를 갖는 DOM Tree

## CSSOM (CSS Object Model)

# 참고

[브라우저는 어떻게 렌더링 되는가 (DOM , CSSOM , Render Tree)](https://velog.io/@yonghyeun/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%90%98%EB%8A%94%EA%B0%80-DOM-CSSOM-Render-Tree)  
[성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)  
[객체 모델 구성](https://web.dev/articles/critical-rendering-path/constructing-the-object-model?hl=ko)  
[렌더링 트리 생성, 레이아웃 및 페인트](https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=ko)
