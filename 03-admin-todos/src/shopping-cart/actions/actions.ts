import { getCookie, hasCookie, setCookie, deleteCookie } from "cookies-next";

/* 
 cookie: cart
 {
 'uuid-123-1': 2,
 'uuid-123-2': 1,
 'uuid-123-3': 4,
 }
*/

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse(String(getCookie("cart")) ?? "{}");
    return cookieCart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();

  delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (!cookieCart[id]) return;

  cookieCart[id] -= 1;

  if (cookieCart[id] === 0) {
    delete cookieCart[id];
  }

  setCookie("cart", JSON.stringify(cookieCart));
};
