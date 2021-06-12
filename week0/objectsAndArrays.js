const obj = {
    a: 1,
    b: 2
};

// 1. Log count of keys in object
console.log('1: ', Object.keys(obj).length)

// 2. Create new object from "obj" and add to newly created param "c" with value "3".
// Original "obj" shouldn't be modified

const obj2 = { ...obj, c: 3};

console.log(obj); // output {a: 1, b: 2};
console.log(obj2) // should return {a: 1, b: 2, c: 3}

// 3.Check if is given input is array (Please, use more than one solution)
const input1 = 'array';
const input2 = ['array'];

console.log('3', (typeof input1) === 'array')
console.log('3.1', Array.isArray(input2))

// 4. Remove duplicates from array (Try to find more than one solution)
const array = ['A', 'B', 'A', 'C', 'B'];

console.log('4:', [... new Set(array)] );
const filterArray = (array) => {
    const result = [];
    array.forEach((item) => {
        if (result.indexOf(item) < 0) {
            result.push(item)
        }
    })
    return result;
}
console.log('4.1:', filterArray(array));
// 5. Merge two arrays, also remove duplicates
const array1 = ['A', 'B', 'F', 'C', 'B'];
const array2 = ['A', 'D', 'E', 'D', 'F'];

console.log('5', [... new Set([...array1, ...array2])]);

// 6. Write function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

const removeNaN = (array) => {
    const result = [];
    array.forEach((item) => {
        if ((typeof item) === 'number') {
            result.push(item)
        }
    })
    return result;
}
console.log('6: ', removeNaN([10, null, -12, false, undefined, '', 0, 234]));

// 7. Get random item from array

const getRandom = (array) => {
    return array[Math.round(Math.random() * array.length)]
}
console.log('7:', getRandom([10, 22, 'Super', null, undefined, 0, false, 111]));

// 8. Sort the array in the ascending order

const sort = (array) => {
    return array.sort((a, b) => a - b);
}
console.log('8: ', sort([11, 21, 13, 88, 2, 4, 77]));

/** 9. Get sorted array from 8 task, and write function, that creates object:
 * {
 *     even: [88, 2, 4],
 *     odd: [11, 21, 13, 77]
 * }
 *  */ 

const filter = (array) => {
    const result = {
        even: [],
        odd: []
    }
    array.forEach((item) => {
        if (item % 2 === 0) {
            result.even.push(item)
        }
        else {
            result.odd.push(item)
        }
    })
    return result;
}
console.log('9: ',  filter([11, 21, 13, 88, 2, 4, 77]));
