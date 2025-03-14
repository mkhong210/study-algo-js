// 25.03.14 - 알고리즘과 맛보기 자바스크립트

function LinearSearch(pArr, nKey) {
  for (let i = 0; i < pArr.length; i++) {
    if (nKey == pArr[i]) {
      return i;
    }
  }

  return -1;
}

// var ar = new Array; //생략
var ar = [23, 47, 19, 63, 57, 26, 75, 73, 82, 89, 47, 11];
// ar은 객체

let key = 75;
// var key = new Number(75); // 원래 형태

let idx = LinearSearch(ar, key);

if (idx == -1) {
  console.log("찾는 값이 없습니다.");
} else {
  console.log("찾는 값이 " + (idx + 1) + "번째 있습니다.");
}
