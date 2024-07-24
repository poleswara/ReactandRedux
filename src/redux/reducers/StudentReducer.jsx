const initialState = {
  name: "",
  gender: "",
  age: "",
  teacher: "",
  mobile: "",
  data: {
    "year": Number(),
    "price": Number(),
    "CPU model": "",
    "Hard disk size": "",
  },
  students: [],
};

const Studentreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VAL":
      return { ...state, [action.field]: action.payload };
      case "SET_VAL_VAL":
        return { ...state, data:{...state.data,[action.field]: action.payload }};
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};

export { Studentreducer };
