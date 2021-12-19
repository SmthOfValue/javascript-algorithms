/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const strArr1 = str1.toLowerCase().split('');
    const strArr2 = str2.toLowerCase().split('');
    if (str1.toLowerCase() !== str2.toLowerCase()) {
        if (strArr1.length === strArr2.length) {
            return strArr1.every(character => {
                return strArr2.includes(character);
            });
        }
        else return false;
    }
    else return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); 