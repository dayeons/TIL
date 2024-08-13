/**
 * Class Keyword
 *
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * = 정보를 일반화해서 정리하는 방법이다.
 */
class IdolModel {
  // 변수명
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // Method
  sayName() {
    return `안녕하세요 ${this.name} 입니다.`;
  }
}

// constructor 생성자

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);

console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);
