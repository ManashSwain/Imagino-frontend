/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Context/ContextProvider";
import { motion } from "motion/react" ;


const Login = () => {
  const [loginState , setLoginState] = useState(false);
  const { showLogin , setShowlogin } = useContext(Appcontext);

  // use effect hook to avoid scrolling 

  useEffect(()=>{
   document.body.style.overflow = "hidden";
   return ()=>{
    document.body.style.overflow = "unset";
   }
  },[])
 
  return (
    <>
      {/* Full-screen blur background */}
      <div className="fixed inset-0 bg-gray-300/30 backdrop-blur-lg z-10"></div>

      {/* Centered Login Form */}
      <div
       className="absolute my-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full rounded-lg bg-white p-6 z-10 shadow-lg">
      <motion.img 
      initial={{opacity:0.3 , y:20}}
      transition={{  duration :0.5}}
      whileInView={{opacity : 1 , y :0}}className="w-8 h-8 relative left-[23rem] cursor-pointer " src="remove.png" alt="cross" onClick={()=>{setShowlogin(false)}} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.img
          initial={{opacity:0.3 , y:20}}
          transition={{  duration :0.5}}
          whileInView={{opacity : 1 , y :0}}
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <motion.h2 initial={{opacity:0.3 , y:20}}
      transition={{ duration :0.5}}
      whileInView={{opacity : 1 , y :0}} className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
           { loginState ?   "Login to your account" :  "Sign up to your account"}
          </motion.h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
         { !loginState && <div>
              <motion.label
              initial={{opacity:0.3 , y:20}}
              transition={{  duration :0.5}}
              whileInView={{opacity : 1 , y :0}}
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
               Enter your name
              </motion.label>
              <motion.div className="mt-2"
              initial={{opacity:0.3 , y:20}}
              transition={{ duration :0.5}}
              whileInView={{opacity : 1 , y :0}}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </motion.div>
            </div>}
            <div>
              <motion.label
              initial={{opacity:0.3 , y:20}}
              transition={{ duration :0.5}}
              whileInView={{opacity : 1 , y :0}}
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </motion.label>
              <motion.div className="mt-2"
              initial={{opacity:0.3 , y:20}}
              transition={{ duration :0.5}}
              whileInView={{opacity : 1 , y :0}}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </motion.div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <motion.label
                initial={{opacity:0.3 , y:20}}
                transition={{ duration :0.5}}
                whileInView={{opacity : 1 , y :0}}
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </motion.label>
               {!loginState ?  " " :  <div className="text-sm">
                  <motion.a
                  initial={{opacity:0.3 , y:20}}
                  transition={{ duration :0.5}}
                  whileInView={{opacity : 1 , y :0}}
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </motion.a>
                </div>}
              </div>
              <motion.div className="mt-2"
              initial={{opacity:0.3 , y:20}}
              transition={{ duration :0.5}}
              whileInView={{opacity : 1 , y :0}}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </motion.div>
            </div>

            <div>
              <motion.button
              initial={{opacity:0.3 , y:20}}
              transition={{duration :0.5}}
              whileInView={{opacity : 1 , y :0}}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >{loginState ? "Login" :
                "create account"}
              </motion.button>
            </div>
          </form>

          { loginState ? <motion.p 
          initial={{opacity:0.3 , y:20}}
          transition={{ duration :0.5}}
          whileInView={{opacity : 1 , y :0}} className="mt-10 text-center text-sm/6 text-gray-500">
            Dont have an account ?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={()=>{setLoginState(false)}}
            >
              Sign Up for new account
            </a>
          </motion.p> :
          <motion.p initial={{opacity:0.3 , y:20}}
          transition={{ duration :0.5}}
          whileInView={{opacity : 1 , y :0}} className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account ?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={()=>{setLoginState(true)}}
            >
              Login
            </a>
          </motion.p>}
        </div>
      </div>
    </>
  );
};

export default Login;
