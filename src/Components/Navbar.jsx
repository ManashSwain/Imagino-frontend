import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [user,setUser] = useState(true);
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
  
      
  return (
   <>
   <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    {user ? <div className="md:ml-auto flex flex-wrap items-center">
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <div className="flex flex-wrap items-center gap-2 border-2 p-2 rounded-3xl  bg-blue-100 mr-3 font-bold">
            <img className="w-6" src="/coin.png" alt="coin" />
        <span className="mr-9  cursor-pointer">Credits left : 54</span>
        </div>
      
    </nav>
    
    <img  className="w-8 cursor-pointer" src="user.png" alt="user" onClick={toggleModal} />
    {isModalOpen && (
        <div
          className="absolute right-0 mt-20 w-28 bg-white shadow-md rounded-lg border border-gray-200"
          onClick={() => setIsModalOpen(false)} // Close on click
        >
          <button
            className="w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded-t-md"
            onClick={() => alert("Logging out...")}
          >
            Logout
          </button>
        </div>
      )}
    </div>  : <div className="md:ml-auto flex flex-wrap items-center justify-center align-middle">
      <p className="mr-9 hover:text-gray-900 cursor-pointer" onClick={()=>{navigate('/buy')}}>Pricing</p>
    <button className=" items-center text-white bg-blue-700 border-0 py-1  px-3 focus:outline-none hover:bg-blue-800 rounded text-base mt-4 md:mt-0 sm:mt-0">Login</button>
    
    </div>}
  </div>
</header>


   </>
  )
}

export default Navbar
