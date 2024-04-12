// let, const
let x;
x = 5;
x = 6;

// const y = 5;
// y = 6; // error

// primitive vs reference

let y = x;
y = 7;

// console.log(x);
// console.log(y);

// const user = {
//   name: 'Filan',
// };

// const user2 = user;
// user2.name = 'Filane';

// console.log(user);
// console.log(user2);

// let a = 5.0;
// console.log(typeof a);

// functions
// void
// function greetUser(name = 'Test') {
//   console.log(`Hello ${name}`);
// }
// greetUser();
// greetUser('Blend');
// function createGreeting(name) {
//   return `Hello ${name}`;
// }

// const greeting = createGreeting('Elton');
// console.log(createGreeting('Blend'));
// console.log(greeting);

// arrow function
// const emriVariables = () => {}

// const greetUser = (name = 'Test') => {
//   console.log(`Hello ${name}`);
//   console.log('Test');
// };
// const greetUser = (name = 'Test') => console.log(`Hello ${name}`);
// greetUser('Elton');

// const createGreeting = (name) => {
//   return `Hello ${name}`;
// };
// const createGreeting = (name) => `Hello ${name}`;
// console.log(createGreeting('Yll'));

// const createUser = (user) => {
//   return `User with id: ${user.id} and name ${user.name}`;
// };
// console.log(createUser({ id: 1, name: 'Filan' }));
// console.log(createUser({ id: 2, name: 'Filane' }));

// function getRandomNumber(numbers) {
//   const index = Math.floor(Math.random() * numbers.length);
//   return numbers[index];
// }
// console.log(getRandomNumber([20, 55, 12, 76, 34, 32]));

// Arrays
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, 'Test', true, null, { name: 'Filan' }, [1, 2]];
const hobbies = ['Sports', 'Cooking', 'Reading', 'Sports'];

const indexOfCooking = hobbies.findIndex((hobby) => hobby === 'Cooking');
// console.log(indexOfCooking);
// const newArray = hobbies.map((hobby) => hobby + '!');
// const newArray = hobbies.map((hobby) => {
//   return { hobby: hobby };
// });
// console.log(newArray);
const filteredItems = hobbies.filter((hobby) => hobby === 'Sports');
// console.log(filteredItems);
const findItem = hobbies.find((hobby) => hobby === 'Cooking');
// console.log(findItem);

// Object
// const user = {
//   id: 1,
//   name: 'Filan',
//   sayHello() {
//     return `Hello ${this.name}`;
//   },
// };

// console.log(user.name, user.sayHello());
// modifikimi
// user.name = 'Filane';
// console.log(user);

// user.age = 20;
// console.log(user);

// delete user.age;
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.keys(user).length);
// console.log(Object.values(user));

// Destructuring
const array = ['Filan', 'Fisteku'];

// const firstName = array[0];
// const lastName = array[1];

const [firstName, lastName] = array;
// console.log(`User ${firstName} ${lastName}`);

const user = {
  id: 1,
  name: 'Filan',
  age: 20,
};

// const name = user.name;
// const mosha = user.age;
const { name, age: mosha } = user;
// console.log(`User ${name} me moshe ${mosha}`);

// Spread operator
const newHobbies = [...hobbies, 'Reading'];
// console.log(newHobbies);
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Loops
// for (let i = 0; i < newHobbies.length; i++) {
//   console.log(i, newHobbies[i]);
// }

for (const item of newHobbies) {
  console.log(item);
}

for (const key in newHobbies) {
  console.log(key, newHobbies[key]);
}
