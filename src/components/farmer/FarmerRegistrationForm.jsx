import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFarmerHandler,
  farmerHandler,
} from "../../redux/actions/StudetActions/FarmerAction";
import { userDetails } from "../../services/service";
import "../../style.css";
import "./FarmerRegistration.css";

const FarmerRegistrationForm = () => {
  const state = useSelector((state) => state.farmer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   let isMounted = true;
  //   const userDetailsHandler = async () => {
  //     try {
  //       let data = await userDetails();
  //       addFarmerHandler(data);
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };
  //   userDetailsHandler();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(farmerHandler("SET_VAL", name, value));
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
    dispatch(addFarmerHandler(farmerDetails));
    // const studentInfo = {
    //   name: state.mobile,
    //   data: {
    //     year: state.data.year,
    //     price: state.data.price,
    //     "CPU model": state.data["CPU model"],
    //     "Hard disk size": state.data["Hard disk size"],
    //   },
    // };
    // studentMobileInformation(studentInfo)
    //   .then((data) => {
    //     console.log("ddddddddddddddddddd", data.status);
    //   })
    //   .catch((err) => {
    //     console.log("errrrr", err);
    //   });
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
          type="text"
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
    </>
  );
};

export default FarmerRegistrationForm;
