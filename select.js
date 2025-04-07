// 25.04.07 ?
// 선택 정렬

var unsortedArray = [64, 34, 25, 12, 22, 11, 90];

function selectionSort(arr) {
  var len = arr.length;
  var minidx = 0;

  for (var i = 0; i < len; i++) {
    for (var j = i + 1, minidx = i; j < len; j++) {
      if (arr[minidx] > arr[j]) {
        minidx = j;
      }
    }
    if (minidx != i) {
      var temp = arr[i];
      arr[i] = arr[minidx];
      arr[minidx] = temp;
    }
  }
  return arr;
}

console.log("정렬 전 : ", unsortedArray);

var sortedArray = selectionSort(unsortedArray); // 버블 정렬

console.log("정렬 후 : ", sortedArray);
