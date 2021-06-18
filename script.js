// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// var n = prompt("enter any number from 0 to 999");
// var numObject = {};

// function transformation(string) {
//     if (string.length - 1 == 2) {
//         numObject.hundreds = +string[0];
//         numObject.dozens = +string[1];
//         numObject.units = +string[2];
//         return numObject;
//     }
//     else if (string.length - 1 == 1) {
//         numObject.hundreds = 0;
//         numObject.dozens = +string[0];
//         numObject.units = +string[1];
//         return numObject;
//     }
//     else if (string.length - 1 == 0) {
//         numObject.hundreds = 0;
//         numObject.dozens = 0;
//         numObject.units = +string[0];
//         return numObject;
//     }
//     console.log("Number exceed max");
//     return numObject;
// }
// transformation(n);




// 2. Для игры Квест, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)



// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»













// // 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// var num = 2, step = 2;
// while (num < 100) {
//     if (num == 2) {
//         console.log(num);
//         ++num;
//     }
//     else if (num % step === 0 && num > step) {
//         step = 2;
//         ++num;
//     }
//     else if (num % step != 0) {
//         step++;
//     }
//     else if (num === step) {
//         console.log(num);
//         ++num;
//         step = 2;
//     }

// }
// // 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// // 3. Товары в корзине хранятся в массиве. Задачи:
// // a) Организовать такой массив для хранения товаров в корзине;
// // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
// var goods = [{
//     title: "Item 1",
//     price: 125,
//     count: 5
// },
// {
//     title: "Item 2",
//     price: 155,
//     count: 5
// },
// {
//     title: "Item 3",
//     price: 100,
//     count: 5
// }
// ];

// function countBasketPrice() {
//     var subtotal = 0;
//     for (var item of goods) {
//         subtotal += item.price;
//         console.log(item.title + " cost " + item.price * item.count);
//     }

// }
// countBasketPrice(goods);



// // 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: 
// // for(…){// здесь пусто}
// for (var i = 0; i <= 9; console.log(i++));



// // 4) *Нарисовать  пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// var element = "x"
// for (var i = 0; i < 20; i++) {
//     console.log(element);
//     element += "x"
// }

// // x
// // xx
// // xxx
// // xxxx
// // xxxxx