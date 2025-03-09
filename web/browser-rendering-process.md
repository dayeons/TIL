## 브라우저는 계층적 구조

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
