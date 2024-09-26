import React,{useState,createContext} from 'react';

export const FarmerContext = createContext(null);

const FarmerInfo = ({children}) => {
    const [farmer,setFarmer] = useState({
        name:'Poleswararo',
    })
  return (
    <>
    <FarmerContext.Provider value={{farmer, setFarmer}}>
        {children}
    </FarmerContext.Provider>
    </>
  )
}

export default FarmerInfo