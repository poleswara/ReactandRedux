import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import store from "./redux/store/Store";
import AppRouter from "./routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="app-container">
          <Header />
          <main className="content">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
