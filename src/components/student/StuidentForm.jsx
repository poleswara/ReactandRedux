import React, { startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  studentHandler,
  addStudentHandler,
} from "../../redux/actions/StudetActions/StudentAction";
import "../../style.css";
import { userDetails, studentMobileInformation } from "../../services/service";

const StuidentForm = () => {
  const state = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    const userDetailsHandler = async () => {
      try {
        let data = await userDetails();
        addStudentHandler(data);
      } catch (err) {
        console.log("err", err);
      }
    };
    userDetailsHandler();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const dataFields = ["year", "price", "CPU model", "Hard disk size"];
    const actionType = dataFields.includes(name) ? "SET_VAL_VAL" : "SET_VAL";
    dispatch(studentHandler(actionType, name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name: state.name,
      gender: state.gender,
      age: state.age,
      teacher: state.teacher,
    };
    dispatch(addStudentHandler(studentData));
    const studentInfo = {
      name: state.mobile,
      data: {
        year: state.data.year,
        price: state.data.price,
        "CPU model": state.data["CPU model"],
        "Hard disk size": state.data["Hard disk size"],
      },
    };
    studentMobileInformation(studentInfo)
      .then((data) => {
        console.log("ddddddddddddddddddd", data.status);
      })
      .catch((err) => {
        console.log("errrrr", err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          value={state.name}
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
          name="age"
          value={state.age}
          onChange={(e) => handleChange(e)}
        />
        <label>Teacher</label>
        <input
          type="text"
          name="teacher"
          value={state.teacher}
          onChange={(e) => handleChange(e)}
        />
        <label>Mobile Name</label>
        <input
          type="text"
          name="mobile"
          value={state.mobile}
          onChange={(e) => handleChange(e)}
        />
        <label>Given Year</label>
        <input
          type="text"
          name="year"
          value={state.data.year}
          onChange={(e) => handleChange(e)}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={state.data.price}
          onChange={(e) => handleChange(e)}
        />
        <label>CPU model</label>
        <input
          type="text"
          name="CPU model"
          value={state.data["CPU model"]}
          onChange={(e) => handleChange(e)}
        />
        <label>Hard disk size</label>
        <input
          type="text"
          name="Hard disk size"
          value={state.data["Hard disk size"]}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default StuidentForm;
