/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (let i = 1;i<=num;i++){
        if (i%3 === 0) {
            if (i%5 === 0){
                console.log('fizzbuzz');
                continue;
            }
            else {
                console.log('fizz');
                continue;
            }
        }
        if (i%5 === 0) {
            console.log('buzz');
            continue;
        }
        console.log(i);
    }
    
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));
fizzBuzz(20);
fizzBuzz(30);