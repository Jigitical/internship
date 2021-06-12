// instead of **** put your name and last name;

const firstName = 'Serhiy';
const lastName = 'Filonenko';

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
const fullName = `${firstName} ${lastName}`;

console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution
console.log('2.1: ', fullName[2] );
console.log('2.2: ', fullName.charAt(2) );


// 3. replace all vowels in fullName with number
const number = 10;
const replaced = fullName.replace(/[euioa]/gmi, number);

console.log('3: ', replaced);


// 4. check if replaced string on position 8 ends with number 10

console.log('4: ', fullName[7].match(/[euioa]/gmi) !== null);

// 5. log part of fullName from 3 to 7 character

console.log('5: ', fullName.substring(2, 7) );

// 6. Divide replaced string by number 10

console.log('6:', fullName.replace(/[euioa]/gmi, number).split(number) )

// 7. Write function capitalize(), to capitalize first letter of string 

const lowerCased = 'new york';
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string, string to insert and position to insert
// Change **** with your name 

const mainString = 'Hello, my name is ****, I want to learn Node.js';
const insert = (string, replaceTo, replaceFrom) => {
   return string.replace(replaceFrom, replaceTo)
}
console.log('8:' , insert(mainString, fullName, '****'))

// 9. Write your own reverse() function. (do not use .reverse())
const reverse = (string) => {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]
    }
    return result;
}
console.log('9', reverse('my random string'));


