import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
   const cartselector =  useSelector((state) => state.cart.items);
   console.log(cartselector.length,'alii')
    return (
        <>  
          <div className="cart">
               <Link to="/cart">
                  <span className="cart-icon">🛒</span>
                  <span className="cart-count">{cartselector.length? cartselector.length:0}</span>
               </Link>
            </div>
        
        </>
    )
}
export default AddToCart;