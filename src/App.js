import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import Student from "./components/pages/Student";

function App() {
  return (
    <>
      <Provider store={store}>
        <Student />
      </Provider>
    </>
  );
}

export default App;
