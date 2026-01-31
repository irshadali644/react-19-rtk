import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

export default function CartList () {
  const cartSelector =  useSelector((state) =>state.cart.items);
    const [cartItems,setCarItems] = useState(cartSelector);
   const dispatch =  useDispatch()
    useEffect(() => {
        setCarItems(cartSelector);
    }, [cartSelector]);
    const navigate = useNavigate()
    const manageQunatity = (id,q) => {
        let quantity = parseInt(q) > 1 ?parseInt(q) : 1
        const cartTempItems = cartSelector.map((item) => {
            return item.id === id?
            {...item,quantity} : item
        })
        console.log(cartTempItems[0]);
        setCarItems(cartTempItems)
    }
    const handlePlaceOrder = () => {
        localStorage.clear();
         alert("Order Placed")
        dispatch(clearAllItems());
        navigate("/")
    }

    return <>
         <div className="cart-container">
            <div className="cart-header">
                <h2>Your cart items</h2>
                <span>{cartItems.length} items</span>
            </div>
            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <div className="thumnails-price-items">
                                <img src={item.thumbnail}/>
                                <div className="item-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.brand}</p>
                                </div>
                            </div>
                            <div className="item-actions">
                                <div style={{display:'flex'}}>
                                     <input onChange={(e)=>manageQunatity(item.id,e.target.value)} value={item.quantity ? item.quantity:1} style={{padding:'10px'}} type="number" placeholder="enter quantity"/>
                                    <div>
                                        <span className="price">{(item.quantity?item.price*item.quantity:item.price).toFixed(2)}</span>
                                        <button onClick={() =>dispatch(removeItem(item))} className="btn remove-carlist">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :null
            }
            <div className="cartFooter-price">
                Total: ${cartItems.reduce((sum,item) => item.quantity? sum + item.price*item.quantity:sum+item.price, 0).toFixed(2)}
            </div>
            <button onClick={()=>handlePlaceOrder()} className="btn" style={{border:'0',color:"#fff", fontWeight:'700'}}>Place order</button>
         </div>
        </>
}