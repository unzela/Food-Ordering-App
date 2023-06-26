import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="">
            <h1 className="font-bold text-3xl text-center p-5">Cart Items - {cartItems.length}</h1>
            <div className="text-center">
                <button onClick={() => handleClearCart()} className="p-2 m-5 bg-orange-100 rounded-lg ">Clear Cart</button>
            </div>
            <div className="flex">
                {cartItems.map((item) => (<FoodItem key = {item.id} {...item}/>))}
            </div>
        </div>
    )
}

export default Cart;