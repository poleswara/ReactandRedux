export const farmerHandler = (val, field, payload) => ({
  type: val,
  field,
  payload,
});

export const addFarmerHandler = (farmerDetails) => ({
  type: "ADD_FARMER",
  payload: farmerDetails,
});

export const deleteFarmer = (index) => ({
  type: "DELETE_FARMER",
  payload: index,
});
