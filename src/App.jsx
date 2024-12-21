/* eslint-disable no-unused-vars */
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import HomePage from './Pages/HomePage';
import BuyCredit from './Pages/BuyCredit';
import Result from './Pages/Result';
import Error from './Components/Error';
import Login from './Components/Login';

import { useContext } from 'react';
import { Appcontext } from './Context/ContextProvider';


function App() {
  const {showLogin , setShowlogin} = useContext(Appcontext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children : [
        {
          path : "/",
          element : <HomePage/>
        },
        {
          path : 'buy',
          element : <BuyCredit/>
        },
        {
          path : 'result',
          element : <Result/>
        }
      ]
    },
    {
      path: "*",
      element: <Error/>,
    },
  ]);
 

  return (
    <>
    {showLogin && <Login/>}
    <RouterProvider router={router} />
    </>
  )
}

export default App
