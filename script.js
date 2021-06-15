
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
var num = 2, step = 2;
while (num < 100) {
    if (num == 2) {
        console.log(num);
        ++num;
    }
    else if (num % step === 0 && num > step) {
        step = 2;
        ++num;
    }
    else if (num % step != 0) {
        step++;
    }
    else if (num === step) {
        console.log(num);
        ++num;
        step = 2;
    }

}
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
var goods = [{
    title: "Item 1",
    price: 125,
    count: 5
},
{
    title: "Item 2",
    price: 155,
    count: 5
},
{
    title: "Item 3",
    price: 100,
    count: 5
}
];

function countBasketPrice() {
    var subtotal = 0;
    for (var item of goods) {
        subtotal += item.price;
        console.log(item.title + " cost " + item.price * item.count);
    }

}
countBasketPrice(goods);



// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: 
// for(…){// здесь пусто}
for (var i = 0; i <= 9; console.log(i++));



// 4) *Нарисовать  пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
var element = "x"
for (var i = 0; i < 20; i++) {
    console.log(element);
    element += "x"
}

// x
// xx
// xxx
// xxxx
// xxxxx