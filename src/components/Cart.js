import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-3xl text-center p-5">Cart Items - {cartItems.length}</h1>
            <button
                className=" p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems?.length === 0 && (
            <h1> Cart is empty. Add Items to the cart!</h1>
            )}
            <ItemList items={cartItems} />
        </div>
    )
}

export default Cart;