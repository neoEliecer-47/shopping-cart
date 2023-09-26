import { useId } from "react";
import "./Cart.css";
import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from "./icons/Icons";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";



const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
