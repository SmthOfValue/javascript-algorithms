/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {
    let result = false;
//для каждого элемента массива проводится сравнение суммы этого элемента и каждого другого элемента массива с sum. Если хотя бы одно сравнение дает true, функция возвращает true
    arr.forEach(element => {
        const arrWithoutElement = arr.slice(0,arr.indexOf(element)).concat(arr.slice(arr.indexOf(element)+1));
        if (arrWithoutElement.some(otherElement => {
            return element + otherElement === sum;
        })) {
            result = true;
            }
    });
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false