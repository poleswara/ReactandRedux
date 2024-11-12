import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addFarmerHandler,
//   farmerHandler,
// } from "../../redux/actions/StudetActions/FarmerAction";
import { setVal, addFarmer } from "../../redux/createslice/FarmerSlice";
import "../../style.css";
import "./FarmerRegistration.css";
import FarmersTable from "./FarmersTable";
import { postDetails } from "../../services/service";

const FarmerRegistrationForm = () => {
  const state = useSelector((state) => state.farmer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // dispatch(farmerHandler("SET_VAL", name, value));
    dispatch(setVal({field:name, value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const farmerDetails = {
      farmername: state.farmername,
      gender: state.gender,
      farmerage: state.farmerage,
      farmingcrop: state.farmingcrop,
      mobile: state.mobile,
      cropyear: state.cropyear,
      price: state.price,
    };
    // dispatch(addFarmerHandler(farmerDetails));
    dispatch(addFarmer(farmerDetails));
    dispatch(postDetails(farmerDetails))
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Farmer Name</label>
        <input
          type="text"
          name="farmername"
          value={state.farmername}
          onChange={(e) => handleChange(e)}
        />
        <label>Gender</label>
        <input
          type="text"
          name="gender"
          value={state.gender}
          onChange={(e) => handleChange(e)}
        />
        <label>Age</label>
        <input
          type="number"
          name="farmerage"
          value={state.farmerage}
          onChange={(e) => handleChange(e)}
        />
        <label>Farming Crop</label>
        <input
          type="text"
          name="farmingcrop"
          value={state.farmingcrop}
          onChange={(e) => handleChange(e)}
        />
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={state.mobile}
          onChange={(e) => handleChange(e)}
        />
        <label>Crop Year</label>
        <input
          type="date"
          name="cropyear"
          value={state.cropyear}
          onChange={(e) => handleChange(e)}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
      <FarmersTable />
    </>
  );
};

export default FarmerRegistrationForm;
