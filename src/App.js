import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import store from "./redux/store/Store";
import AppRouter from "./routes";
import FarmersTable from "./components/farmer/FarmersTable";
import FarmerInfo from "./context/farmercontext/FarmerInfo";
import { DisplayUser, UpdateUser } from "./context/farmercontext/FarmerRendred";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="app-container">
          <Header />
          <main className="content">
            <AppRouter />
            <Posts />
            <FarmersTable />
            <FarmerInfo>
              <DisplayUser />
              <UpdateUser />
            </FarmerInfo>
          </main>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
