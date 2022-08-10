import React from "react";
import Home from "../screens/Home";
import {render} from "@testing-library/react-native";

describe("Home page", () => {
  it('should homepage', () => {
    const page = render(<Home />)

    const pageButton = page.getByTestId('Home')
    // expect(false).toBeTruthy();
  });
})