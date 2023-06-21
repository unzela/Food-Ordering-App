import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Body from "../Body";
import {fireEvent, render, waitFor} from "@testing-library/react";
import store from "../../utils/store.js";
import {StaticRouter} from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: Promise.resolve(RESTAURANT_DATA)
    });
});

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(15);
    console.log(shimmer);
})

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));
    
    const restroList = body.getByTestId("restro-list");

    expect(restroList.children.length).toBe(15);
    console.log(shimmer);
})

test("Search for string(food) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store = {store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));
    
    const input = body.getByTestId("search-input");

    fireEvent.change(input, { 
        target: {
            value: "pav"
        }})

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    expect(restroList.children.length).toBe(2);
    console.log(shimmer);
})  