// // 1
// function even(numbers) {
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
//     const average = sum / evenNumbers.length;
//     return average;
// }
// const Numbers = [2, 4, 6, 8, 10];
// const result = even(Numbers);
// console.log(`Average of even numbers: ${result}`);


// // 2
// function findLongestWord(words) {
//     const longestWord = words.reduce((longest, current) => {
//         if (current.length > longest.length){
//             return current;
//         }else
//             return longest;
//     }, '');

//     return longestWord;
// }

// const list = ['apple', 'banana', 'grapefruit', 'kiwi', 'strawberry'];
// const longest = findLongestWord(list);
// console.log(`The longest word is: ${longest}`);

// 3

// function averagePages(books) {
//     const pagesArray = books.map(book => book.pages);
//     const totalPages = pagesArray.reduce((sum, pages) => sum + pages, 0);
//     const average = totalPages / books.length;

//     return average;
// }
// const books = [
//     { title: " 1", author: " 1", pages: 100 },
//     { title: " 2", author: " 2", pages: 200 },
//     { title: " 3", author: " 3", pages: 300 }
// ];

// console.log(averagePages(books)); 

// // 4
// function stringFrequency(arr) {
//     return arr.reduce((acc, str) => {
//         acc[str] = (acc[str] || 0) + 1;
//         return acc;
//     }, {});
// }

// const strings = ["Azeddine", "hello", "hello"];
// console.log(stringFrequency(strings)); 

// // 5
// function countPeopleByCity(people) {
//     return people.reduce((acc, person) => {
//         acc[person.city] = (acc[person.city] || 0) + 1;
//         return acc;
//     }, {});
// }

// const people = [
//     { name: "Alice", age: 30, city: "New York" },
//     { name: "Bob", age: 40, city: "Chicago" },
//     { name: "Charlie", age: 50, city: "New York" }
// ];

// console.log(countPeopleByCity(people)); 
