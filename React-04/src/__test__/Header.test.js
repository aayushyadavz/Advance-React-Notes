// UNIT TESTING
import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with login button inside it", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" }); // if there's multiple btns

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart (0)");
  const cartItems = screen.getByText(/Cart/); // passed regex

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});

// Notes:

// We wrapped the component because the JavaScript DOM understands React code, JSX, and JavaScript, but it doesn't understand Redux or React Router code. That's why we need to provide it with the store and BrowserRouter.
