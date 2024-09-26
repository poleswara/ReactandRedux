import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import FarmersTable from "./FarmersTable";
import { FarmerReducer } from "../../redux/reducers/FarmerReducer";

describe("Farmers Table Component", () => {
  let store;

  beforeEach(() => {
    // Set up the mock store with a real or mock reducer
    store = configureStore({
      reducer: {
        farmer: FarmerReducer, // Use the actual reducer here or a mock reducer
      },
      preloadedState: {
        farmer: {
          farmers: [], // You can modify this to match your test case
        },
      },
    });
  });

  test("Farmers Not Available", () => {
    render(
      <Provider store={store}>
        <FarmersTable />
      </Provider>
    );
    const farmerAvailable = screen.getByText("No farmers available", {
      exact: false,
    });
    expect(farmerAvailable).toBeInTheDocument();
  });
});
