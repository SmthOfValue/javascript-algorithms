/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const strArr = str.split(' ');
    const capitalizedStr = strArr.map(word => {
        if (word !== ''){
            return word[0].toUpperCase() + word.slice(1);
        }
    });
    return capitalizedStr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('слово '));