/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const Appcontext = createContext();

const ContextProvider = (props) => {
    const [user,setUser] = useState(false);
    const [showLogin , setShowlogin] = useState(true);
    const values = {
        user,
        setUser,
        showLogin , 
        setShowlogin
    }
    
  return (
  <>
  <Appcontext.Provider value={values}>
    {props.children}
  </Appcontext.Provider>
  </>
  )
}

export default ContextProvider
