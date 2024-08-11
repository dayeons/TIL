/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0) {
  console.log("number 변수는 짝수입니다.");
} else {
  console.log("number 변수는 홀수입니다.");
}

if (number % 2 === 0) {
  console.log("2의 배수입니다.");
} else if (number % 3 === 0) {
  console.log("3의 배수입니다.");
} else if (number % 4 === 0) {
  console.log("4의 배수입니다.");
} else if (number % 5 === 0) {
  console.log("5의 배수입니다.");
} else {
  console.log("2, 3, 4, 5의 배수가 아닙니다.");
}
console.log("----------------");
const englishDay = "monday";

let koreaDay;

switch (englishDay) {
  case "monday":
    koreaDay = "월요일";
    break;

  case "tuesday":
    koreaDay = "화요일";
    break;

  case "wednesday":
    koreaDay = "수요일";
    break;

  case "thursday":
    koreaDay = "목요일";
    break;

  case "friday":
    koreaDay = "금요일";
    break;

  default:
    koreaDay = "주말";
	break;
}

console.log(koreaDay)
