import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Bem vindo ao seu carrinho de compras!");

const item1 = await createItem("Whey Protein Max", 120.0, 1);
const item2 = await createItem("Creatina Growth", 119.3, 3);
const item3 = await createItem("Cafeína", 152.3, 1);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.addItem(myWishList, item3);

await cartServices.deleteItem(myWishList, item3.name);
await cartServices.removeItem(myCart, 1);

console.log("---------------------------------------------------------");
await cartServices.displayCart(myCart);
console.log("---------------------------------------------------------");

await cartServices.calculeTotal(myCart);
