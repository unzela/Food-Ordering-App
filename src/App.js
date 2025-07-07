import ReactDOM  from "react-dom";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import {lazy, Suspense} from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Instamart = lazy (() => import("./components/Instamart"));
const About = lazy (() => import("./components/About"));

const AppLayout =() => {
    const [user, setUser] = useState({
            name: "Unzela",
            email: "iunzela@gmail.com"
    })
    
    return (
        <div className="app">
            <Provider store={appStore}>
            <UserContext.Provider value={{user:user}}>
                <Header />
                <Outlet />
                <Footer/>
            </UserContext.Provider>
            </Provider>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h2>Loaading...</h2>}>
                            <About />
                        </Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>
                            <Instamart />
                         </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 