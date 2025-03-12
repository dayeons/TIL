# es6

## 화살표 함수

```js
function make1() {
 console.log("test1");
}
make1();

function make2(num) {
 console.log(`${num} 값`);
}
make2(200);

function make3(num1, num2) {
 console.log(`${num1 + num2}`);
}
make3(20, 30);
```

```js
const make1 = () => {
 console.log("test1");
};
make1();

const make2 = (num) => {
 console.log(`${num} 값`);
};
make2(200);

const make3 = (num1, num2) => {
 console.log(`${num1 + num2}`);
};
make3(20, 30);
```

## template literal

```js
let a = 20;
const b = 30;
const str1 = a + "와" + b + "의 합은" + (a + b);
console.log(str1);

const str2 = `${a} 와 ${b}의 합은 ${a + b}`;
console.log(str2);

const name = "정다연";
const age = 20;
const addr = "서울";

const str3 = `이름은 ${name} 나이는 ${age} 집은 ${addr} 입니다.`;
console.log(str3);
```

## 삼항연산자

react JSX 문법 안에서 연산자 3개만 조건문처럼 사용가능 - if (X)  
함수 영역은 모든 연산자 제어문 사용가능

```js
const test1 = true;
const test2 = false;
const test3 = undefined;

// 같다 === , 다르다 !==
// 삼항연산자 (조건) ? (참) : (거짓)
const result1 = test1 === true ? "참" : "거짓";
console.log(result1);

// 조건 && 조건에 대한 결과가 참일 때 결과
const result2 = test1 && "참에대한결과";
console.log(result2);

// 조건 || '거짓의 결과값'
const result3 = test2 || "거짓의 결과";
console.log(result3);

const result4 = test3 || "값이 존재하지 않음";
console.log(result4);
```

다중 if문처럼 사용하고싶다.

- 조건1 && '결과1'
- 조건2 && '결과2'
- 조건3 && '결과3'
- 조건4 && '결과4'

## 비구조할당

비구조할당, 구조분해  
const { 키, 키, 키 } = 객체

```js
const dog = {
 name: "치와와",
 age: 3,
};
console.log(dog.name, dog.age);
console.log(dog["name"], dog["age"]);

const { name, age } = dog;
console.log(name, age);

const data = {
 name1: "김철수",
 age1: 20,
 kor: 100,
 eng: 80,
 mat: 70,
};

console.log(data.name1, data["age1"], data.kor, data["mat"]);

const { name1, age1, kor, eng, mat } = data;
console.log(name1, age1, kor, eng, mat);
```

## 배열 메서드

```js
const arr = [10, 20, 30];
arr.push(40);
arr.push(50);
arr.push(60);

// 배열의값이 변경
console.log(arr);

const arr1 = [10, 20, 30];
// 사본 concat
const arr2 = arr1.concat();
console.log(arr1);
console.log(arr2);

const arr3 = arr1.concat(40, 50, 60);
console.log(arr3);

const data = [
 { id: 1, name: "정다연", age: 20 },
 { id: 2, name: "김다연", age: 22 },
 { id: 3, name: "이다연", age: 23 },
];
console.log(data[0].id, data[0].name, data[0].age);

const data1 = data.concat();
const data2 = data.concat({ id: 4, name: "박다연", age: 30 }); // 사본 + 추가
console.log(data1);
console.log(data2);
```

## spread operator

```js
const arr = ["강아지", "고양이", "토끼", "소"];
const arr1 = arr.concat(); //  copy
const arr2 = [...arr]; // copy
const arr3 = arr.concat("뱀", "햄스터");
const arr4 = [...arr, "우산", "딸기"];
const arr5 = ["과자", ...arr, "사탕"];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log("///////////");

const dog = {
 name: "강아지",
 age: 2,
};
const dog1 = { ...dog }; // copy
const dog2 = { ...dog, name: "치와와", age: 10 }; // 내용을 업데이트, 키 값을 넣으면 수정/갱신, 배열X 객체O
console.log(dog1);
console.log(dog2);
```

```js
const data = [
 { id: 1, name: "1다연", age: 5 },
 { id: 2, name: "2다연", age: 10 },
 { id: 3, name: "3다연", age: 30 },
 { id: 4, name: "4다연", age: 20 },
 { id: 5, name: "5다연", age: 15 },
];
const data1 = [...data]; // copy
console.log(data1);

// 추가
const data2 = [
 ...data,
 {
  id: 6,
  name: "6다연",
  age: 16,
 },
];
console.log(data2);

// 4다연를 (7다연, 35)로 변경하기
const data3 = data.map((item, index) => {
 if (item.id === 4) {
  return {
   ...item, // 현재 4번의 데이터 copy
   name: "7다연",
   age: 35,
  };
 } else {
  return item;
 }
});
console.log(data3);

// 1번의 이름 변경
const data4 = data.map((item) =>
 item.id === 1 ? { ...item, name: "8다연" } : item
);
console.log(data4);
```

## map

[Array.prototype.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

> arr.map(callback(currentValue[, index[, array]])[, thisArg])

### 매개변수

**callback** 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.  
**currentValue** 처리할 현재 요소.  
**index Optional** 처리할 현재 요소의 인덱스.  
**array Optional** map()을 호출한 배열.  
**thisArg Optional** callback을 실행할 때 this로 사용되는 값.

### 반환 값

배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.

```js
// map 반복문 - jsx영역
arr.map((현재값, 인덱스) => {
 return 반환값;
});
```

```js
const arr = [10, 20, 30];
const data = [
 { id: 1, name: "정다연", age: 20 },
 { id: 2, name: "김다연", age: 22 },
 { id: 3, name: "이다연", age: 23 },
];

arr.map((item, index) => {
 return console.log(index, item);
 // return 지우면 리엑트에선 안나옴
});

// 결과가 하나일 때는 {} return 생락가능
arr.map((item, idx) => console.log(idx, item));

data.map((item, index) => {
 return console.log(item.id, item.name, item.age);
});

data.map((item, index) => console.log(item.id, item.name, item.age));
```

## find

> arr.find( 현재값 => 조건 ) => 결과 하나의 값  
> arr.findIndex( 현재값 => 조건 ) => 인덱스 번호

```js
const arr = [10, 20, 30, 40, 50, 60];
// 객체.find(현재값=>조건) : 값 결과
const arr1 = arr.find((item) => item > 40);
console.log(arr1);

const arr2 = arr.find((item) => item === 20);
console.log(arr2);

const data = [
 { id: 1, name: "정다연", age: 20 },
 { id: 2, name: "김다연", age: 22 },
 { id: 3, name: "이다연", age: 23 },
];
// id 가 1인 값
const data1 = data.find((item) => item.id === 1);
console.log(data1);

const data2 = data.findIndex((item) => item.name === "정다연");
console.log(data2);
```

## filter

[Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> arr.filter(callback(element[, index[, array]])[, thisArg])  
> arr.filter( 현재값 => 조건 ) => 결과 배열출력 / 새로운 배열로 반환  
> arr.find( 현재값 => 조건 ) => 결과 하나의 값  
> arr.findIndex( 현재값 => 조건 ) => 인덱스 번호

### 매개변수

**callback** 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다. 다음 세 가지 매개변수를 받습니다.  
**element** 처리할 현재 요소.  
**index Optional** 처리할 현재 요소의 인덱스.  
**array Optional** filter를 호출한 배열.  
**thisArg Optional** callback을 실행할 때 this로 사용하는 값.

### 반환 값

테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

```js
const arr = [10, 20, 30, 40, 50, 60];

// 객체.filter( 현재값 => 조건 )
const result1 = arr.filter((item) => item > 30);
console.log(result1);

const result2 = arr.filter((item) => item === 40);
console.log(result2);

// 40 제외한 나머지
const result3 = arr.filter((item) => item !== 40);
console.log(result3);

const data = [
 { id: 1, name: "정다연", age: 20 },
 { id: 2, name: "김다연", age: 22 },
 { id: 3, name: "이다연", age: 23 },
];

// 김다연만 출력
const data1 = data.filter((item) => item.name === "김다연");
console.log(data1);

// id 2번 삭제
const data2 = data.filter((item) => item.id !== 2);
console.log(data2);
```

## indexOf

```js
const arr = ["고구마", "감자", "김치", "고기", "고단백", "참치"];
const txt1 = "고";
const result1 = arr.filter((item) => item.indexOf(txt1) !== -1);
console.log(result1);

const data = [
 { text: "운동을 하다" },
 { text: "수영을 하다" },
 { text: "저녁을 먹다" },
 { text: "친구를 만나다" },
 { text: "잠을 자다" },
 { text: "밥을 하다" },
];
const txt2 = "하다";
const result2 = data.filter((item) => item.text.indexOf(txt2) !== -1);
console.log(result2);
```
