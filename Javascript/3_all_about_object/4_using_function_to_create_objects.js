/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  //   console.log(new.target);
  if (!new.target) {
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}

const yuJin = new IdolMode(); /* 
/* 
console.log(yuJin);
/* console.log(yuJin.dance()); */
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2);
/* console.log(global.name); */

// arrow 함수에서 new 사용 안된다
const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};
const yuJin3 = new IdolModelArrow("안유진", 2003);
console.log(yuJin3);
