import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import {fireEvent, render, waitFor} from "@testing-library/react";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: Promise.resolve(MENU_DATA)
    });
});

test("Add items to cart", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store = {store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(menu.getByTestId("menu")));
    
    const addBtn = menu.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cart = menu.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 1");
    console.log(shimmer);
})  