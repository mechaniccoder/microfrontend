import faker from "faker";

const mount = (el) => {
  const text = `<div> you have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = text;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#my-cart");
  if (el) mount(el);
}

export { mount };
