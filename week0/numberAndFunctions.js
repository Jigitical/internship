
// 1. Write function to get random value in range from -100 to 100
const random = (num1, num2) => {
    return Math.random() * (num2 - num1) + num1;
};

console.log('1: ', random(-100, 100))

// 2. Write function to check is positive random number, 

const isPositive = (num) => {
    return num >= 0;
}
console.log('2: ', isPositive(random(-100, 100)));
// output should be boolean

// 3. Write function, which create Array of random numbers. Array length = 6;
// Result of function should be sum of array elements

const getRandomArray = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = random(-100, 100);
    }
    return arr;
}
const getArraySum = (arr) => {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    })
    return sum;
}
console.log('3:', getArraySum(getRandomArray(6)));

// 4. Write function to create random color
const getRandomColor = () => {
    const arr = [];
    for (let i =0; i < 3; i++) {
        arr.push(Math.round(random(0, 255)))
    }
    return arr;
}
console.log('4: ', getRandomColor());
//output rgb(*, *, *);

// 5. Write function to find out if a number is a natural number or not
const isNatural = (...nums) => {
    const arr = [];
    nums.forEach((num) => {
        arr.push(Number.isInteger(num) && num >= 0);
    })
    return arr;
}
console.log('5: ', isNatural(10, 22, -23, 5.4));

// 6. Create function isDivideBy(number, firstDivider, secondDivider). Check if an integer number is divisible by each out of two arguments

/**
 * (45, 1, 6)    ->  false
 * (45, 5, 15)   ->  true
 * 
 * (-12, 2, -6)  ->  true
 * (-12, 2, -5)  ->  false
 */
const isDivideBy = (number, firstDivider, secondDivider) => {
    return number % firstDivider === 0 && number % secondDivider === 0
}
console.log('6: ', isDivideBy(45, 1, 5));