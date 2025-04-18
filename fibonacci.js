// Iterative Fibonacci function
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
  }
  
  // Recursive Fibonacci function
  function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
  }
  
  // Recursive Merge Sort function
  function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Testing Fibonacci
  console.log("Iterative Fibonacci (8):", fibs(8));
  console.log("Recursive Fibonacci (8):", fibsRec(8));
  
  // Testing Merge Sort
  console.log("Merge Sort:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
  console.log("Merge Sort:", mergeSort([105, 79, 100, 110]));
  