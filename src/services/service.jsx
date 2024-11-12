import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userDetails = createAsyncThunk("posts/fetchPosts", async () => {
  // try {
  //   let res = await axios({
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     url: "https://api.restful-api.dev/objects",
  //   });
  //   return res.data;
  // } catch (error) {
  //   return error;
  // }
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const postDetails = createAsyncThunk(
  "form/submitForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      return response.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const studentMobileInformation = (data) => {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://api.restful-api.dev/objects",
      data: data,
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export { userDetails, postDetails, studentMobileInformation };
