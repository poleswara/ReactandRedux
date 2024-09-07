import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("./components/farmer/FarmerRegistrationForm"));

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default AppRouter;
