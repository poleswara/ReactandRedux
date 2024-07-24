export const studentHandler = (val,field, payload) => ({
  type: val,
  field,
  payload,
});

export const addStudentHandler = (stuData) => ({
  type: "ADD_STUDENT",
  payload: stuData,
});

export const deleteStudent = (index) => ({
    type: 'DELETE_STUDENT',
    payload: index,
  });
