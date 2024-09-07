import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFarmer } from '../../redux/actions/StudetActions/FarmerAction';

const FarmersTable = () => {
  const farmers = useSelector((state) => state.farmer.farmers);
  const dispatch = useDispatch();

  if (!farmers) {
    return <div>Loading...</div>; // Handle the case where students might be undefined
  }

  const deleteHandler = (index) => {
    dispatch(deleteFarmer(index));
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
      {farmers.length > 0 ? (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Farmer Name</th>
              <th style={thTdStyle}>Gender</th>
              <th style={thTdStyle}>Age</th>
              <th style={thTdStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{farmer.farmername}</td>
                <td style={thTdStyle}>{farmer.gender}</td>
                <td style={thTdStyle}>{farmer.farmerage}</td>
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

export default FarmersTable;
