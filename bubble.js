// 25.04.07
// 버블 정렬 알고리즘

var unsortedArray = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("정렬 전 : ", unsortedArray);

var sortedArray = bubbleSort(unsortedArray); // 버블 정렬

console.log("정렬 후 : ", sortedArray);
