import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import store from "./redux/store/Store";
import AppRouter from "./routes";
import FarmersTable from "./components/farmer/FarmersTable";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="app-container">
          <Header />
          <main className="content">
            <AppRouter />
            <FarmersTable />
          </main>
          <Footer />
        </div>
        <Header />
      </Provider>
    </>
  );
}

export default App;
