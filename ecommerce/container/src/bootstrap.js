import { mount as mountProduct } from "products/productsIndex";
import { mount as mountCart } from "cart/cartIndex";

console.log("container");

const productContainer = document.querySelector("#production-products");
mountProduct(productContainer);

const cartContainer = document.querySelector("#production-cart");
mountCart(cartContainer);
