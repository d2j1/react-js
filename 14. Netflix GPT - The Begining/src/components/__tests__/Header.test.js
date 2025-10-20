import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { describe, expect, test } from "@jest/globals";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Header component should render correctly", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);
    const headerElement = screen.getByText("Home");
    expect(headerElement).toBeInTheDocument();
});



test("Header component has Login and logout button", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
);
    const loginBtn = screen.getByRole("button", {  name: "Login"});
    expect(loginBtn).toBeInTheDocument();

    loginBtn.click();

    const logoutBtn = screen.getByRole("button", {  name: "-- Log out"});
    expect(logoutBtn).toBeInTheDocument();
});