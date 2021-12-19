/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/
//использую создание уникального массива из задачи 06
function intersection(arr1, arr2) {
    const uniqArr1 = arr1.filter(function (number, index, arr1) {
        return arr1.lastIndexOf(number) === index;
      });
    const uniqArr2 = arr2.filter(function (number, index, arr2) {
        return arr2.lastIndexOf(number) === index;
      });
    const intersection = uniqArr1.filter(item => {
        return uniqArr2.includes(item);
    })
    return intersection;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []