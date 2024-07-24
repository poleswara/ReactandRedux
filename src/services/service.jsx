import axios from "axios";

const userDetails = async () => {
  try {
    let res = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://api.restful-api.dev/objects",
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const studentMobileInformation = (data) => {
  return new Promise(async (resolve, reject) => {
    await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://api.restful-api.dev/objects",
      data:data
    })
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export { userDetails, studentMobileInformation };
