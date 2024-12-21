import { motion } from "motion/react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Appcontext } from "../Context/ContextProvider";

const Header = () => {
  const navigate = useNavigate();
  const {user , setShowlogin} = useContext(Appcontext)
  const generateHandler = ()=>{
    if(user){
      navigate('/result')
    }
    else{
      setShowlogin(true)
    }
  }
  return (
    <>
    <motion.div className="bg-blue-100 header"
    initial={{opacity:0.1 , y:100}}
    transition={{duration : 1.5}}
    whileInView={{opacity : 1 , y :0}}
    viewport={{once : true}}
    >
  <div className="relative isolate px-6 lg:px-8 pt-0 !important  ">
    <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <motion.div className="flex justify-center align-middle gap-2 bg-white relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" 
        initial={{opacity : 0 , y : -20}}
        transition={{delay:0.4 , duration :0.8}}
        animate={{opacity : 1 ,x : 0}}>
          Best text to image generator 
          <img className=" cursor-pointer w-4 h-4 mt-1" src="starsingle.png" alt="single-star" /> 
        </motion.div>
        
      </div>
      <div className="text-center">
        <motion.h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
        initial={{opacity : 0 , y : -20}}
        transition={{delay:0.5 , duration :1}}
        animate={{opacity : 1 ,x : 0}}>Turn text to <span className="text-blue-700">image</span>, in seconds</motion.h1>
        <motion.p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
        initial={{opacity : 0 , y : -20}}
        transition={{delay:0.8 , duration :1}}
        animate={{opacity : 1 ,x : 0}}>Unleash your creativity with AI. Turn your imagination into visual art in seconds. Just type , and watch the magic happen.</motion.p>
        <motion.div className="mt-10 flex items-center justify-center gap-x-6"
        initial={{opacity:0.1 , y:100}}
        transition={{duration : 1.5}}
        whileInView={{opacity : 1 , y :0}}
        viewport={{once : true}}>
          <button onClick={generateHandler}  className=" flex gap-2 cursor-pointer justify-center items-center rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Generate Images
          <img className="w-4" src="star.png" alt="star" />
          </button>
        </motion.div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
    </div>
  </div>
</motion.div>


    </>
  )
}

export default Header



