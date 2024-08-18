/**
 * Execution Context?
 * 
 * execution context는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경이다. 코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면 된다.
 * 
 * 
 * 1) Global Context -> 최상위 execution context 코드를 실행하면 무조건 생성되는 context로 웹에서의 window객체나 nodeJS에서의 global객체를 생성하고 들고 있다. 
 * 2) Function context -> 함수가 실행될 때마다 함수별로 실행되는 context다. 함수 실행에 대한 모든 정보를 갖고 있다.
 */