import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const {user} = useContext(UserContext); 
    const cartItems = useSelector(store => store.cart.items);

    return(
    <div className="flex justify-between bg-orange-100 shadow-lg sm:bg-orange-300 md:bg-orange-200"> 
        
        <div className="">
            <img data-testid="logo" className="h-28 px-4 py-2" src={LOGO_URL}></img>
        </div>
        
        <div className="">
            <ul className="flex py-10 font-bold text-xl">
                <li className="px-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-3">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-3">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-3">
                    <Link to="/instamart">Instamart</Link>
                </li>
                <li className="px-3" >
                    <Link to="/cart" data-testid="cart">Cart - {cartItems.length}</Link>
                </li>
            </ul>
        </div>

        <div className="flex m-10 space-x-3">
            <h1 className="py-1" data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
            <h1 className="py-1 font-bold text-orange-700">{user.name}</h1>
            { isLoggedIn ?  (
                <button onClick={() => setIsLoggedIn(false)} className="p-2 bg-orange-300">Logout</button>
                ) :
                (<button onClick={() => setIsLoggedIn(true)} className="p-2 bg-orange-300">Login</button>)
            }
        </div>

    </div>
    );
 };

 export default Header;