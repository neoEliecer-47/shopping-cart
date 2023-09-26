const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - €{price}
      </div>

      <footer>
        <small>{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};
export default CartItem;
