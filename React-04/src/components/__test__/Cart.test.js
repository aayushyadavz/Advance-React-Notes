import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock";
import RestaurantsMenu from "../RestaurantsMenu";
import Header from "../Header";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should render the restaurant menu and expand accordion to show food items", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantsMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  const foodItemsInAccor = screen.getAllByTestId("foodItems");
  expect(foodItemsInAccor.length).toBe(14);

  const addButton = screen.getAllByRole("button", { name: "ADD" });
  expect(addButton.length).toBe(14);
});

it("Should update the cart count in the header when an item is added, along with the cart contents.", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addButton = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  expect(screen.getAllByTestId("item").length).toBe(1);
});
