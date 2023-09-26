import { useCartContext } from "../context/CartContext";

const useCart = () => {
  const cart = useCartContext();

  if (!cart) throw new Error("useCart must be used within a CartProvider");
  return cart;
};

export default useCart;
