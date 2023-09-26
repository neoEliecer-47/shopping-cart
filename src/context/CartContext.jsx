import { createContext, useContext, useReducer, useState } from 'react'

//to create context
const CartContext = createContext()

const initialState = JSON.parse(window.localStorage.getItem('cart')) || []


const updateLocalStorage = state => {
  return window.localStorage.setItem('cart', JSON.stringify(state))
}


const reducer = (state, action) => {//basicamente transforma el estado dependiendo de la accion, y retorna ese nuevo estado calculado: sea nuevo o viejo
  const { type, payload } = action//el type es la accion y el payload es el objeto para actualizar el estado (el producto en este caso)
  console.log(state)
  console.log(payload)

  switch (type){
    case 'ADD_TO_CART' : {
      const productInCartIndex = state.findIndex(item => item.id === payload.id)//retorna un -1 si no lo encuentra
      if(productInCartIndex >= 0){
       /* const newState = structuredClone(state);//hace copias profundas, por lo tanto, aqui tenemos un carrito nuevo
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState*/
        const newState2 = [...state.slice(0, productInCartIndex), //agrega los productos desde el index 0 hasta el productCartIndex -1
        {...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },//exactamente en el index encontgrado agrega el producto y suman la cantidad de uno. +1
        ...state.slice(productInCartIndex + 1)//agrega el resto de productos que van despues del indice encontrado. ya que el slice solo trabaja con un indice start y un end, siendo el end -1 en la posicion del array
      ]
  
      }
      const newState = [
        ...state, {...payload, quantity: 1}//en caso de que el producto que estamos intentando pasar no existe en el array(payload = product)
      ]
    /*  const newState2 = [...state.slice(0, productInCartIndex), //agrega los productos desde el index 0 hasta el productCartIndex -1
        {...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },//exactamente en el index encontgrado agrega el producto y suman la cantidad de uno. +1
        ...state.slice(productInCartIndex + 1)//agrega el resto de productos que van despues del indice encontrado. ya que el slice solo trabaja con un indice start y un end, siendo el end -1 en la posicion del array
      ]*/
      //console.log({new2: newState2})

      updateLocalStorage(newState)
      return newState
    }
    
    case 'REMOVE_FROM_CART' : {
      const newState = state.filter(item => item.id !== payload.id)//prev es el estado anterior
      updateLocalStorage(newState)
      return newState
    }
    case 'CLEAR_CART' : {
      updateLocalStorage(initialState)
      return initialState
    }
  }
}
//to create provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [cart, setCart] = useState([])
 const addToCart = (product) => dispatch({
  type: 'ADD_TO_CART',
  payload: product
 })
 const removeFromCart = (product) => dispatch({
  type: 'REMOVE_FROM_CART',
  payload: product
 })

 const clearCart = (product) => dispatch({
  type: 'CLEAR_CART',
  payload: product
 })
  /*const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)//chequear si el producto que intentamos anadir al carrito ya existe: retorna el indice or -1 in case it doesn't exist
  
    if(productInCartIndex >= 0){
      const newCart = structuredClone(cart);//hace copias profundas, por lo tanto, aqui tenemos un carrito nuevo
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)

    }
    
    setCart(prev => [
      ...prev, {...product, quantity: 1}//en caso de que el producto que estamos intentando pasar no existe en el array
    ])
  }
   
  
  const clearCart = () => {
    setCart([])
  }


  const removeFromCart = (product) => {
    setCart((prev) => prev.filter(item => item.id !== product.id))//prev es el estado anterior
  }
  //el filter retorna un nuevo array con todos los items que cumplan la condicion
  */
return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
export const useCartContext = () => useContext(CartContext)

