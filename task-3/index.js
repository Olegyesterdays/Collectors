const person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "gaming"],
};

const greet = ({ name, age }) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};

const addHobby = (hobbies, newHobby) => {
    return [...hobbies, newHobby];
};

const multiply = (a, b) => a * b;

greet(person);
console.log(addHobby(person.hobbies, "traveling"));
console.log(multiply(5, 3));
