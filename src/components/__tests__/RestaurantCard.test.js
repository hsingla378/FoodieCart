import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestauarantCard Component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  let name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});
