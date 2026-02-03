// Задание 7.7.3
// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст). 
// Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18. 
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.


const users = [
    { name: 'John', age: 27 },
    { name: 'Max', age: 32 },
    { name: 'Tom', age: 17 },
];

const usersAge = users.filter(user => user.age >= 18);
console.log(usersAge);

const usersName = users.map((userName) => {
    return userName.name;
});
console.log(usersName);