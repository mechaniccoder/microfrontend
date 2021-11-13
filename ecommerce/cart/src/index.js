import faker from "faker";

const text = `<div> you have ${faker.random.number()} items in your cart</div>`;

document.querySelector("#my-cart").innerHTML = text;
