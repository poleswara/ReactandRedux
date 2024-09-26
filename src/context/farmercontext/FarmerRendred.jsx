import React,{useContext} from 'react'
import { FarmerContext } from './FarmerInfo'

// Component to display the current user
const DisplayUser = () => {
    const { farmer } = useContext(FarmerContext); // Consume the user context
    return <h1>User: {farmer.name}</h1>;
  };
  
  // Component to update the user name
  const UpdateUser = () => {
    const { setFarmer } = useContext(FarmerContext); // Consume the user context
  
    const handleChange = (e) => {
        setFarmer({
        name:e.target.value
      }); // Update user name
    };
  
    return (
      <input 
        type="text" 
        placeholder="Change user name" 
        onChange={handleChange}
      />
    );
  };
  
  export { DisplayUser, UpdateUser };