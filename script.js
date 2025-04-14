// 1. Assignment of strings(Compare strings):
function areAnagrams(firstWord, secondWord) {
    // Convert to lowercase and sort the characters
    const sortedFirst = firstWord.toLowerCase().split('').sort().join('');
    const sortedSecond = secondWord.toLowerCase().split('').sort().join('');

    return sortedFirst === sortedSecond;
}

let firstWord = "Mary";
let secondWord = "Army";
console.log(areAnagrams(firstWord, secondWord)); // true

// 2. Change side of string:
function reverseString(str) {
    return str.split('').reverse().join('');
}

let str1 = "asdtghujiklop";
console.log(reverseString(str1)); // polkijuhgtdsa

// 3. Remove duplicates
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

let str = "asfoaopgeofkcaslhgkls";
console.log(removeDuplicates(str)); // asfopekchlg

// 4. Alternate uppercase and lowercase
function alternateCase(str) {
    return str.split('').map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

let str4 = "aabsdeef";
console.log(alternateCase(str4)); // AaBsDeEf

// 5. uniqueInOrder
function uniqueInOrder(iterable) {
    const result = [];
    let lastChar = null;

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== lastChar) {
            result.push(iterable[i]);
            lastChar = iterable[i];
        }
    }

    return result;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']

// 6. The biggest difference between numbers:
function maxProfit(prices) {
    let maxDiff = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - minPrice;
        maxDiff = Math.max(maxDiff, diff);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxDiff;
}

const arr = [10, 7, 5, 8, 11, 9, 1];
console.log(maxProfit(arr)); // 6 (buy at 5, sell at 11)

// 7. User salary analysis
let users = [
    { name: "Maria", role: "frontend developer", salary: 15000 },
    { name: "Doron", role: "frontend developer", salary: 57000 },
    { name: "Ana", role: "backend developer", salary: 23000 },
    { name: "Maor", role: "backend developer", salary: 60000 },
];

// task 1 Find max salary of user:
function findMaxSalary(users) {
    return Math.max(...users.map(user => user.salary));
}
console.log("Max salary:", findMaxSalary(users)); // 60000

// task 2 Find user with max salary:
function findUserWithMaxSalary(users) {
    return users.reduce((max, user) =>
        user.salary > max.salary ? user : max, users[0]);
}
console.log("User with max salary:", findUserWithMaxSalary(users)); // Maor

// task 3 Find min salary of user:
function findMinSalary(users) {
    return Math.min(...users.map(user => user.salary));
}
console.log("Min salary:", findMinSalary(users)); // 15000

// task 4 Find average salary of user:
function findAverageSalary(users) {
    const total = users.reduce((sum, user) => sum + user.salary, 0);
    return total / users.length;
}
console.log("Average salary:", findAverageSalary(users)); // 38750

// task 5 find all backends:
function findBackendDevelopers(users) {
    return users.filter(user => user.role === "backend developer");
}
console.log("Backend developers:", findBackendDevelopers(users));

// 8 find str in nested object
function findString(targetStr, obj = data) {
    if (obj.name === targetStr) {
        return true;
    }

    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (findString(targetStr, obj[key])) {
                return true;
            }
        }
    }

    return false;
}

const data = {
    name: "Doron",
    firstData: {
        name: "Hagay",
        secondData: {
            name: "Moty"
        },
    }
};

console.log(findString("Moty", data)); // true

// 9 Write a function to check the correctness of brackets:
function isBalanced(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of str) {
        if ('{[('.includes(char)) {
            stack.push(char);
        } else if ('}])'.includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{{([])}}"));  // true

// 10. Write a function that will delete all duplicates:
function removeDuplicatesFromArray(arr) {
    return [...new Set(arr)];
}

const arr10 = [1, 2, 2, 3, 5, 4, 6, 7, 3, 2, 5, 7, 9, 22, 35, 6];
console.log(removeDuplicatesFromArray(arr10)); // [1,2,3,5,4,6,7,9,22,35]

// 11. What will be printed?
// way 1: For all buttons, i will be 5 when clicked because var is function-scoped 
// and the loop has already completed by the time the buttons are clicked.

// way 2: Each button will display its correct index (0, 1, 2, 3, 4) when clicked
// because the IIFE creates a new scope with the current value of i.

// 12 What will be printed?
/*
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
*/

// 13. Find angle between hours and minutes arrows:
function findClockAngle(h, m) {
    // Hours hand moves 30 degrees per hour plus 0.5 degrees per minute
    const hourAngle = (h % 12) * 30 + m * 0.5;

    // Minutes hand moves 6 degrees per minute
    const minuteAngle = m * 6;

    // Calculate the absolute difference
    let angle = Math.abs(hourAngle - minuteAngle);

    // Take the smaller angle (less than 180 degrees)
    angle = Math.min(angle, 360 - angle);

    return angle;
}

// Example
console.log(findClockAngle(3, 15)); // 7.5 degrees

// 14. What will be printed?
console.log(1 + "2" + "2");       // "122" (1 is converted to string)
console.log(1 + +"2" + "2");      // "32" (+"2" is converted to number 2, then added to 1, then converted to string with "2")
console.log(1 + -"1" + "2");      // "02" (1 + (-1) = 0, then + "2" = "02")
console.log(+"1" + "1" + "2");    // "112" (+"1" is number 1, then converted to string with "1" and "2")
console.log("A" - "B" + "2");     // "NaN2" (A-B is NaN, then + "2" = "NaN2")
console.log("A" - "B" + 2);       // NaN (A-B is NaN, then + 2 is still NaN)

// 15. What will be printed?
console.log("0 || 1 = " + (5 || 2));  // "0 || 1 = 5" (returns first truthy value)
console.log("1 || 2 = " + (1 || 2));  // "1 || 2 = 1" (returns first truthy value)
console.log("0 && 1 = " + (0 && 1));  // "0 && 1 = 0" (returns first falsy value)
console.log("1 && 2 = " + (1 && 2));  // "1 && 2 = 2" (returns last value if all truthy)

// 16. What will be printed?
// first version:
// console.log(add(2)(3)(4) === 9); // false - object comparison with valueOf
// console.log(add(2)(3)(4) == 9);  // true - allows type coercion, valueOf is used

// second version:
// console.log(add(2)(3)(4) === 9); // true - direct number comparison

// 17. Write Fibonacci logic:
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

// Print Fibonacci sequence
for (let i = 0; i <= 10; i++) {
    console.log(fibonacci(i));
}

// 18. Merge and sort:
function mergeAndSort(str1, str2) {
    return (str1 + str2).split('').sort().join('');
}

let str18a = "afhghhhhh";
let str18b = "abbbbb";
console.log(mergeAndSort(str18a, str18b)); // "aabbbbbbfffghhhhhhh"

// 19. write Promise.all():
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Promises must be an array'));
        }

        const results = new Array(promises.length);
        let resolvedCount = 0;

        if (promises.length === 0) {
            return resolve(results);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                (value) => {
                    results[index] = value;
                    resolvedCount++;

                    if (resolvedCount === promises.length) {
                        resolve(results);
                    }
                },
                (error) => {
                    reject(error);
                }
            );
        });
    });
}

// Example usage:
const p1 = new Promise((resolve) => setTimeout(() => resolve('hi'), 100));
const p2 = new Promise((resolve) => setTimeout(() => resolve('all'), 100));
const p3 = new Promise((resolve) => setTimeout(() => resolve('there'), 100));

promiseAll([p1, p2, p3]).then(console.log); // ["hi", "all", "there"]

// 20. Avg of salaries:
function averageSalaryByCompany(users) {
    const companyTotals = {};
    const companyCounts = {};

    users.forEach(user => {
        if (!companyTotals[user.company]) {
            companyTotals[user.company] = 0;
            companyCounts[user.company] = 0;
        }

        companyTotals[user.company] += user.salary;
        companyCounts[user.company]++;
    });

    const result = {};
    for (const company in companyTotals) {
        result[company] = companyTotals[company] / companyCounts[company];
    }

    return result;
}

const users20 = [
    { company: "Microsoft", salary: 50000 },
    { company: "Google", salary: 1000 },
    { company: "Microsoft", salary: 50000 },
    { company: "Microsoft", salary: 1000 },
    { company: "Meta", salary: 30000 },
];

console.log(averageSalaryByCompany(users20));
// { Microsoft: 33666.67, Google: 1000, Meta: 30000 }

// 21. Write debounce:
function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        const context = this;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Example usage:
function handleSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(handleSearch, 300);
// Later in code:
// debouncedSearch("test"); // Will only execute after 300ms of no additional calls

// 22. Write Binary search:
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