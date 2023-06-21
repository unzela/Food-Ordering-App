import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
               <Header />
            </Provider>
        </StaticRouter>
    );

    //Check if logo is loaded
    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256");
})

test("Online status should be green on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
               <Header />
            </Provider>
        </StaticRouter>
    );

    //Check if status is online
    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("✅");
})

test("Cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter >
            <Provider store={store}>
               <Header />
            </Provider>
        </StaticRouter>
    );

    //Check if status is online
    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 0");
})