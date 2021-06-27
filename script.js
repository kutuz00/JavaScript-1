var items = document.querySelectorAll(".item");
var div = document.createElement("div");
var cart = document.querySelector(".basket");
var basketOfGoods = [];
var button = document.createElement("button");
var buttons;
var item = document.createElement("h1");
var img = document.createElement("img");
var price = document.createElement("span");
var goods = [{
    title: "item",
    price: 200,
    quantity: 10,
    productImage: "img/image"
},
{
    title: "item",
    price: 330,
    quantity: 8,
    productImage: "img/image"
},
{
    title: "item",
    price: 150,
    quantity: 5,
    productImage: "img/image"
}];
showCatalog();
buttons = document.getElementsByTagName('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        var basket = {};
        var total = 0;
        var cartItemName = document.createElement("h3");
        var cartItemCount = document.createElement("p");
        var cartItemSubtotal = document.createElement("span");
        basket.itemName = e.target.parentElement.firstChild.innerText;
        basket.itemPrice = parseInt(e.target.previousElementSibling.innerText);
        basket.itemCount = 1;
        basket.subTotal = basket.itemPrice * basket.itemCount;
        cartItemName.innerHTML = basket.itemName;
        cartItemCount.innerHTML = basket.itemCount;
        cartItemSubtotal.innerHTML = basket.itemPrice;
        document.querySelector(".basket").append(cartItemName.outerHTML + cartItemCount.outerHTML + cartItemSubtotal.outerHTML);
        if (basketOfGoods.length === 0) {
            basketOfGoods.push(basket);
        }
        else if (basketOfGoods.length != 0) {
            for (var j = 0; j < basketOfGoods.length; j++) {

                if (basketOfGoods[j].itemName === basket.itemName && basketOfGoods[j].itemPrice === basket.itemPrice) {
                    basketOfGoods[j].itemCount = parseInt(basketOfGoods[j].itemCount + basket.itemCount);
                    basketOfGoods[j].subTotal = parseInt(basketOfGoods[j].itemCount * basket.itemPrice);
                    break;
                }
                else if (basketOfGoods[j + 1] === undefined) {
                    basketOfGoods.push(basket);
                    break;
                }
            }
        }
        for (var i = 0; i < basketOfGoods.length; i++) {
            total += basketOfGoods[i].subTotal;
        }
        totalPrice(total);
    }

}
function showCatalog() {
    for (var i = 0; i < goods.length; i++) {
        item.innerText = goods[i].title + (i + 1);
        img.src = goods[i].productImage + i + ".jpg";
        price.innerText = goods[i].price;
        button.innerText = "Add to cart " + (i + 1);
        items[i].innerHTML = item.outerHTML + img.outerHTML + price.outerHTML + button.outerHTML;
        document.querySelector(".items").append(items[i]);

    }
}
// function addToCart(name, quantity, price) {
//     var basketDiv = document.createElement("div"),

//     basketHeader.innerText = name;
//     basketParagraph.innerText = quantity;
//     basketSpan.innerText = price;

//     console.log(name);
//     // for (var i = 0; i < basketDiv.length; i++) {
//     //     basketDiv[i].innerHTML = basketHeader.outerHTML + basketParagraph.outerHTML + basketSpan.outerHTML;
//     //     document.querySelector(".basket").append(basketDiv[i]);


//     // }

// }
function totalPrice(n) {
    div.innerText = n;
    document.querySelector(".basket").append(div)
}