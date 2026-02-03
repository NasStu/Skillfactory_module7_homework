// Задание 7.7.5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, 
// отсортированные в порядке возрастания.


const arr = [4, 9, 3, 1, 3, 5];

function uniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    return uniqueNumbers.sort((a, b) => a - b);
}

const uniqueSortedArr = uniqueSortedNumbers(arr);
console.log(uniqueSortedArr);