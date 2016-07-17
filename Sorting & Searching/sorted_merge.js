
var a = [12, 23, 45, 76];
var b = [3, 5, 19, 25, 55];

var merged = merge(a, b);
console.log(merged);

function merge(a, b) {
  
  var indexA = a.length-1; // 3
  var indexB = b.length-1; // 4
  var indexMerged = a.length + b.length - 1;
  
  while (indexB >= 0) {
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      a[indexMerged] = a[indexA];
      indexA -= 1;
    } else {
      a[indexMerged] = b[indexB];
      indexB -= 1;
    }
    indexMerged -= 1;
  }
  
  return a;
  
}