// app/lib/cartUtils.ts

export interface CartItem {
  id: string;        // Unique ID for the cart entry (e.g. "productID-size")
  product_id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CART_KEY = "nissin_cart_storage";

// Get all items
export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return []; // Safety for Server Side Rendering
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

// Add item to cart
export const addToCart = (item: CartItem) => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex((i) => i.id === item.id);

  if (existingItemIndex > -1) {
    // If item exists, just increase quantity
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    // Else push new item
    cart.push(item);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  
  // Dispatch a custom event so the Navbar can update the count instantly (Optional but good)
  window.dispatchEvent(new Event("cart-updated"));
};

// Remove single item
export const removeFromCart = (itemId: string) => {
  const cart = getCart().filter((item) => item.id !== itemId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
};

// Clear entire cart (after successful order)
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event("cart-updated"));
};