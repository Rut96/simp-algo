// 1. Compare Strings (Anagrams)
let firstWord = "Mary".toLowerCase().split("").sort().join("");
let secondWord = "Army".toLowerCase().split("").sort().join("");
console.log("1:", firstWord === secondWord);

// --------------------------------------------------------------------------------
// 2. Reverse string
let str1 = "asdtghujiklop";
console.log("2:", str1.split('').reverse().join(''));

// --------------------------------------------------------------------------------
// 3. Remove duplicates from string
let str2 = "asfoaopgeofkcaslhgkls";
console.log("3:", [...new Set(str2)].join(''));

// --------------------------------------------------------------------------------
// 4. Swap case
let str3 = "aabsdeef";
let swapped = str3.split('').map(c =>
    c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
).join('');
console.log("4:", swapped);

// --------------------------------------------------------------------------------
// 5. Unique in order
function uniqueInOrder(str) {
    return [...str].filter((char, i) => char !== str[i - 1]);
}
console.log("5:", uniqueInOrder('AAAABBBCCDAABBB'));

// --------------------------------------------------------------------------------
// 6. Biggest difference
const arr = [10, 7, 5, 8, 11, 9, 1];
let min = arr[0], maxDiff = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    maxDiff = Math.max(maxDiff, arr[i] - min);
}
console.log("6:", maxDiff);

// --------------------------------------------------------------------------------
// 7. Salary tasks
let users = [
    { name: "Maria", role: "frontend developer", salary: 15000 },
    { name: "Doron", role: "frontend developer", salary: 57000 },
    { name: "Ana", role: "backend developer", salary: 23000 },
    { name: "Maor", role: "backend developer", salary: 60000 },
];

let salaries = users.map(u => u.salary);
let maxSalary = Math.max(...salaries);
let minSalary = Math.min(...salaries);
let avgSalary = salaries.reduce((a, b) => a + b) / salaries.length;
let backends = users.filter(u => u.role.includes("backend"));
console.log("7:", { maxSalary, minSalary, avgSalary, backends });

// --------------------------------------------------------------------------------
// 8. Find string in nested object
const data = {
    name: "Doron",
    firstData: {
        name: "Hagay",
        secondData: {
            name: "Moty"
        },
    }
};

function findString(value, obj = data) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            if (findString(value, obj[key])) return true;
        }
        if (obj[key] === value) return true;
    }
    return false;
}
console.log("8:", findString("Moty"));

// --------------------------------------------------------------------------------
// 9. Balanced brackets
function isBalanced(str) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let ch of str) {
        if (map[ch]) {
            stack.push(map[ch]);
        } else {
            if (stack.pop() !== ch) return false;
        }
    }
    return stack.length === 0;
}
console.log("9:", isBalanced("{{([])}}"));

// --------------------------------------------------------------------------------
// 10. Remove duplicates in array
let nums = [1, 2, 2, 3, 5, 4, 6, 7, 3, 2, 5, 7, 9, 22, 35, 6];
console.log("10:", [...new Set(nums)]);

// --------------------------------------------------------------------------------
// 11. Button closures
//way 1
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode(`Button ${i}`));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }
// Way 1 (will print 5 always)

// way 2
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', (function(i) {
//     return function() { console.log(i); };
//   })(i));
//   document.body.appendChild(btn);
// Way 2 (correctly prints 0–4)


// --------------------------------------------------------------------------------
// 12. This context  
var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("12:", "outer func: this.foo = " + this.foo);
        console.log("12:", "outer func: self.foo = " + self.foo);
        (function () {
            console.log("12:", "inner func: this.foo = " + this.foo);
            console.log("12:", "inner func: self.foo = " + self.foo);
        })();
    }
};
myObject.func();
/*
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
*/

// --------------------------------------------------------------------------------
// 13. Clock angle
// 13. Find angle between hours and minutes arrows:

// let h = +prompt("Enter a hour: ");
// let m = +prompt("Enter a minute: ");

// let hourAngleEveryMinute = 0.5;
// let angle;

function getAngle(h, m) {
    let angle = Math.abs(30 * h + 0.5 * m - 6 * m);
    return Math.min(angle, 360 - angle);
}
// Example:
console.log("13:", getAngle(3, 30));

// --------------------------------------------------------------------------------
// 14. What will be printed? 

// console.log(1 + "2" + "2");    // "122" (1 is converted to string)
// console.log(1 + +"2" + "2");   // "32" (+"2" is converted to number 2, then added to 1, then converted to string with "2")
// console.log(1 + -"1" + "2");   // "02" (1 + (-1) = 0, then + "2" = "02")
// console.log(+"1" + "1" + "2"); // "112" (+"1" is number 1, then converted to string with "1" and "2")
// console.log("A" - "B" + "2");  // "NaN2" (A-B is NaN, then + "2" = "NaN2")
// console.log("A" - "B" + 2);    //  NaN (A-B is NaN, then + 2 is still NaN)

// --------------------------------------------------------------------------------
// 15.  What will be printed? 
console.log("15:", "0 || 1 = " + (5 || 2)); // "0 || 1 = 5" (returns first truthy value)
console.log("15:", "1 || 2 = " + (1 || 2)); // "1 || 2 = 1" (returns first truthy value)
console.log("15:", "0 && 1 = " + (0 && 1)); // "0 && 1 = 0" (returns first falsy value)
console.log("15:", "1 && 2 = " + (1 && 2)); // "1 && 2 = 2" (returns last value if all truthy)

// --------------------------------------------------------------------------------
// 16.  What will be printed?
// first
// function add(num1) {
//     let sum = num1;
//     function a(num2) {
//         sum += num2;
//         return a;
//     }

//     a.valueOf = () => sum;
//     return a;
// }

// console.log(add(2)(3)(4) === 9);  // false - object comparison with valueOf
// console.log(add(2)(3)(4) == 9);  // true - allows type coercion, valueOf is used

// second
// function add (x) {
//     return function (y) { // anonymous function
//       return function (z) { // anonymous function
//         return x + y + z;
//       };
//     };
// }

// console.log(add(2)(3)(4) === 9); // true - direct number comparison


// --------------------------------------------------------------------------------
// 17. Fibonacci

// function fibonacci(n) {
//     const res = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         res.push(res[i - 1] + res[i - 2]);
//     }
//     return res;
// }

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
console.log("17:", fibonacci(10));

// --------------------------------------------------------------------------------
// 18. Merge and sort
let s1 = "afhghhhhh", s2 = "abbbbb";
console.log("18:", [...new Set((s1 + s2).split(''))].sort().join(''));

// --------------------------------------------------------------------------------

// 19. write Promise.all():

// p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'hi');
// });
// p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'all');
// });
// p3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'there');
// });

let p1 = new Promise(res => setTimeout(res, 100, 'hi'));
let p2 = new Promise(res => setTimeout(res, 100, 'all'));
let p3 = new Promise(res => setTimeout(res, 100, 'there'));

Promise.all([p1, p2, p3]).then(results => console.log("19:", results));

// --------------------------------------------------------------------------------
// 20. Avg by company

// const userSalaries = [
//     { company: "Microsoft", salary: 50000 },
//     { company: "Google", salary: 1000 },
//     { company: "Microsoft", salary: 50000 },
//     { company: "Microsoft", salary: 1000 },
//     { company: "Meta", salary: 30000 },
// ];

// way1:
// let companyMap = {};
// userSalaries.forEach(({ company, salary }) => {
//     companyMap[company] = companyMap[company] || [];
//     companyMap[company].push(salary);
// });
// for (let c in companyMap) {
//     let avg = companyMap[c].reduce((a, b) => a + b) / companyMap[c].length;
//     console.log(`20: ${c} avg = ${avg}`);
// }


// way2:
// function averageSalaryByCompany(users) {
//     const companyTotals = {};
//     const companyCounts = {};

//     users.forEach(user => {
//       if (!companyTotals[user.company]) {
//         companyTotals[user.company] = 0;
//         companyCounts[user.company] = 0;
//       }

//       companyTotals[user.company] += user.salary;
//       companyCounts[user.company]++;
//     });

//     const result = {};
//     for (const company in companyTotals) {
//       result[company] = companyTotals[company] / companyCounts[company];
//     }

//     return result;
//   }

// --------------------------------------------------------------------------------
// 21. Debounce
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// --------------------------------------------------------------------------------
// 22. Binary Search

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target
        }

        if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 9)); // 4
console.log(binarySearch(sortedArray, 4)); // -1