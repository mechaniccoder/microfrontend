import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

/**
 * context/situation #1
 * We want to render this app immediately to element
 * This code is running our app in isolation
 */
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("my-products");
  if (el) mount(el);
}

/**
 * context/situation #2
 * We should not render immediately with container and other apps
 */
export { mount };
