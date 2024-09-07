const initialState = {
  farmername: "",
  farmerage: "",
  gender: "",
  mobile: "",
  farmingcrop: "",
  cropyear: "",
  price: "",
  farmers:[]
};

const FarmerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VAL":
      return { ...state, [action.field]: action.payload };
    // case "SET_VAL_VAL":
    //   return { ...state, data:{...state.data,[action.field]: action.payload }};
    case "ADD_FARMER":
      return { ...state, farmers: [...state.farmers, action.payload] };
    case "DELETE_FARMER":
      return {
        ...state,
        farmers: state.farmers.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

export { FarmerReducer };
