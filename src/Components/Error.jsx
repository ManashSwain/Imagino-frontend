import { useNavigate } from "react-router-dom"

const Error = () => {
    const navigate = useNavigate();
  return (
    <>
<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-indigo-600">404</p>
    <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-8xl">Page not found</h1>
    <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <span onClick={()=>{navigate('/')}} className=" cursor-pointer rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</span>
    </div>
  </div>
</main>

    </>
  )
}

export default Error
