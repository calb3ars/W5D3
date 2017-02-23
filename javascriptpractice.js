//Arrays
Array.prototype.myUniq = function() {
// const myUniq = function(arr) {
    let uniqueArr = []
    for (let i = 0; i < this.length; i++) {
       if (!uniqueArr.includes(this[i])) {
         uniqueArr.push(this[i])
       };
    }

    return uniqueArr;
};

// console.log(myUniq([1,1,1,1,1,1]));

const myTwoSum = function(arr) {
  let resultPairs = []

  for (let i = 0; i< arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        resultPairs.push([i, j])
      };
    }
  }
  return resultPairs;
};

console.log(myTwoSum([1,-1,4,3,2,7,-6,-7]));

const myTranspose = function(arr) {
  const transposed_arr = [];
  for (let i = 0; i <= arr.length; i++) {
    const cols = [];
    for (let j = 0; j < arr[i].length; j++) {
      cols.push(arr[j][i])
    }
    transposed_arr.push(cols)
  }
  return transposed_arr
};


//Enumerables

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  results = [];
  this.myEach((el) => {
    results.push(callback(el))
  })
  return results;
};


Array.prototype.myInject = function(callback) {
  let accumulator = 0
  this.myEach((el) => {
    accumulator += callback(el)
  })

  return accumulator;
};

// Iterations
let compare = function(a, b) {
  if (a > b) {
    return 1;
  }
};

Array.prototype.myBubblesort = function(compare) {
  let sorted = false;
  while (sorted !== true) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (compare(this[i], this[j]) === 1) {
        let x = this[j];
        this[j] = this[i];
        this[i] = x;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.mySubstrings = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      result.push(this.slice(i,j+1));
    }
  }
  // return myUniq(result);
  return result.myUniq();
};

// recursion


const range = function(start, end) {
  if (end < start) {
    return [];
  } else {
    return (range(start, end - 1).concat([end]));
  }
};

// sum of an Array
Array.prototype.iterationSum = function() {
  let result = 0;
  this.myEach((el) => {
    result += el;
  });

  return result;
};

Array.prototype.recursiveSum = function() {
  if (this.length <= 1) {
    return this[0];
  } else {
    let num = this.pop();
    let num2 = this.pop();
    num2 += num;
    this.push(num2);
    return (this.recursiveSum());
  }
};

// exponents
const exponents = function(b,n) {
  if (n === 0) {
    return 1;
  } else {
    return b * exponents(b, n - 1) ;
  }
};

// odd or even
const exp2 = function(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  } else if (n % 2 === 0) {
    let x = exp2(b, n / 2);
    return (x *= x);
  } else {
    let y = exp2(b, (n - 1) / 2);
    y *= y;
    return (b *= y);
  }
};

// fib

const fib = function(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let prevArr = fib(n - 1);
    let last = prevArr[prevArr.length - 1];
    let nextLast = prevArr[prevArr.length - 2];
    return (fib(n - 1).concat(last + nextLast));
  }
};

const bsearch = function(arr, target) {
  if(arr.length < 1) {
    return null;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid,arr.length + 1);

  if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]) {
    let searchRes = bsearch(right, target);
    if (searchRes === null) {
      return null;
    } else {
      return (searchRes + mid);
    }
  } else {
    return bsearch(left, target);
  }
};
