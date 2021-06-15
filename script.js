// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - c = (a + 1) now a = 2 c = 2
// d = b++; alert(d);           // 1 - d = b then b + 1 now b = 2 d = 1
// c = (2+ ++a); alert(c);      // 5 - because a = 2 and we add 1 a = 3 now c = 5
// d = (2+ b++); alert(d);      // 4 - because b = 2 and we add 1 b = 3 now d = 4
// alert(a);                    // 3 
// alert(b);                    // 3
// Почему код даёт именно такие результаты?


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2); - will be 5


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// var a = +prompt("Enter number");
// var b = +prompt("Enter number");
// var result;

// if (a >= 0 && b >= 0) {
//     result = a - b;
// }
// else if (a < 0 && b < 0) {
//     result = a * b;
// }
// else {
//     result = a + b;
// }
// alert(result);

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. Дополнительное задание. Сделайте решение вторым способом, используя рекурсию.

// var a = +(Math.random() * 10 + 5).toFixed();

// function recursion(a, b) {
//     if (a < 0 || a > b) {
//         return;
//     }
//     else if (a <= b) {
//         console.log(a);
//         recursion(a + 1, b);
//     }
// }
// recursion(a, 15);

// switch (a) {
//     case 0:
//         console.log(0);
//     case 1:
//         console.log(1);
//     case 2:
//         console.log(2);
//     case 3:
//         console.log(3);
//     case 4:
//         console.log(4);
//     case 5:
//         console.log(5);
//     case 6:
//         console.log(6);
//     case 7:
//         console.log(7);
//     case 8:
//         console.log(8);
//     case 9:
//         console.log(9);
//     case 10:
//         console.log(10);
//     case 11:
//         console.log(11);
//     case 12:
//         console.log(12);
//     case 13:
//         console.log(13);
//     case 14:
//         console.log(14);
//     case 15:
//         console.log(15);

// }

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// function additiion(a, b) {
//     return a + b;
// }
// function subtraction(a, b) {
//     return a - b;
// }
// function multiplication(a, b) {
//     return a * b;
// }
// function division(a, b) {
//     return a / b;
// }

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "+":
//             return additiion(arg1, arg2);
//         case "-":
//             return subtraction(arg1, arg2);
//         case "*":
//             return multiplication(arg1, arg2);
//         case "/":
//             return division(arg1, arg2);
//     }
// }
// var a = +prompt("Enter argument 1");
// var b = +prompt("Enter argument 2");
// var operation = prompt("Enter operation");
// alert(mathOperation(a, b, operation));

// 7) *Сравнить null и 0. Попробуйте объяснить результат.

// alert(null == 0); // false
// alert(null > 0); // false
// alert(null < 0); // false
// alert(null >= 0); // true
// alert(null <= 0); // true

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

// function power(val, pow) {
//     if (pow == 1) {
//         return val;
//     }
//     else if (pow == 0) {
//         return 1;
//     }
//     else {
//         return val * power(val, pow - 1);
//     }
// }
// alert(power((Math.random() * 10).toFixed(), (Math.random() * 10).toFixed()));


////