import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {

    const { cart, setCart } = useContext( CartContext )

    console.log(cart);



  return (
    <div>Estoy en el carrito</div>
  )
}

export default Cart