import useCart from "../hooks/useCart";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons/Icons";

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id); //some retorna o true o false
  };

  console.log(cart)
  return (
    <main className="products">
      <ul>
        {products.slice(0, 12).map((product) => {
          const isProductInCart = checkProductInCart(product);
          
          
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - €{product.price}
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? '#EDC7C2' : '#C2D8ED'}} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                  {isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
