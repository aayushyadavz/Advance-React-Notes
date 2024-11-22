import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPriceLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />); // passing in props

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard with price labels", () => {
  const RestaurantCardPriceLabel = withPriceLabel(RestaurantCard);

  render(<RestaurantCardPriceLabel resData={MOCK_DATA} />); // passing in props

  const priceLabel = screen.getByText(
    `${MOCK_DATA.info.aggregatedDiscountInfoV3.header} ${MOCK_DATA.info.aggregatedDiscountInfoV3.subHeader}`
  );

  expect(priceLabel).toBeInTheDocument();
});
