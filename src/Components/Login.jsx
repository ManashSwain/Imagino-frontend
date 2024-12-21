import { useState } from "react";

const Login = () => {
  const [loginState , setLoginState] = useState(false);
  return (
    <>
      {/* Full-screen blur background */}
      <div className="fixed inset-0 bg-gray-300/30 backdrop-blur-lg z-10"></div>

      {/* Centered Login Form */}
      <div className="absolute my-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full rounded-lg bg-white p-6 z-10 shadow-lg">
      <img className="w-8 h-8 relative left-[23rem] " src="remove.png" alt="cross" />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
           { loginState ?   "Login to your account" :  "Sign up to your account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
         { !loginState && <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
               Enter your name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
               {!loginState ?  " " :  <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>}
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >{loginState ? "Login" :
                "create account"}
              </button>
            </div>
          </form>

          { loginState ? <p className="mt-10 text-center text-sm/6 text-gray-500">
            Dont have an account ?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={()=>{setLoginState(false)}}
            >
              Sign Up for new account
            </a>
          </p> :
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account ?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
              onClick={()=>{setLoginState(true)}}
            >
              Login
            </a>
          </p>}
        </div>
      </div>
    </>
  );
};

export default Login;
