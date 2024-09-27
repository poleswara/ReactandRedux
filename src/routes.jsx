import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FarmerInfo from "./context/farmercontext/FarmerInfo";
import { DisplayUser, UpdateUser } from "./context/farmercontext/FarmerRendred";
const Posts = React.lazy(() => import("./components/posts/Posts"));
const Login = React.lazy(() =>
  import("./components/farmer/FarmerRegistrationForm")
);

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FarmerInfo>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/display-user" element={<DisplayUser />} />
            <Route path="/update-user" element={<UpdateUser />} />
          </Routes>
        </FarmerInfo>
      </Suspense>
    </>
  );
};
export default AppRouter;
