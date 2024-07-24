import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent } from '../../redux/actions/StudetActions/StudentAction';

const StudentTable = () => {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();

  if (!students) {
    return <div>Loading...</div>; // Handle the case where students might be undefined
  }

  const deleteHandler = (index) => {
    dispatch(deleteStudent(index));
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const thTdStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  };
  

  return (
    <>
      {students.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Name</th>
              <th style={thTdStyle}>Age</th>
              <th style={thTdStyle}>Teacher</th>
              <th style={thTdStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{student.name}</td>
                <td style={thTdStyle}>{student.age}</td>
                <td style={thTdStyle}>{student.teacher}</td>
                <td style={thTdStyle}>
                  <button onClick={() => deleteHandler(index)}>
                    Remove Record
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students available</p>
      )}
    </>
  );
};

export default StudentTable;
