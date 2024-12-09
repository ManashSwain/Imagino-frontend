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

function App() {
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
    <RouterProvider router={router} />
    </>
  )
}

export default App
