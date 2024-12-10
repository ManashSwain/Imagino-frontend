import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default RootLayout
