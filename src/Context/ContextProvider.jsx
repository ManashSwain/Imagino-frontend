/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const Appcontext = createContext();

const ContextProvider = (props) => {
    const [user,setUser] = useState(true);
    const values = {
        user,
        setUser
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
