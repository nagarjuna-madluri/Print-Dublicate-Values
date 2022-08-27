var A = [1, 2, 3, 4, 5, 2, 3, 5];
var nonDuplicates = [...new Set(A)];
var duplicatesArray = [];

for (var i = 0; i < A.length; i++) {
  var tempArray = A.filter((ele) => A[i] == ele);
  if (tempArray.length > 1) {
    duplicatesArray.push(A[i]);
  }
}

console.log([...new Set(duplicatesArray)]);
