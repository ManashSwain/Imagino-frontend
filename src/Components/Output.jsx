import { useState } from "react";

const Output = () => {

  // eslint-disable-next-line no-unused-vars
  const [image , setImage] = useState("spaceship.jpg");
  const [isImageLoaded , setImageLoaded] = useState(false);
  const [loading , setLoading] = useState(true);
  const [input , setInput] = useState('');
  
  const onSubmitHandler = async (e)=>{

  }
  return (  
    <>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center mt-24 ">
        <div className="container relative flex flex-col items-center justify-center p-5">
          <div className="imageContainer relative max-w-sm w-full flex items-center justify-center overflow-hidden ">
            <img
              className="w-full rounded"
              src="spaceship.jpg"
              alt="spaceship-image"
            />
            <span className={`absolute bottom-0 left-0 h-1 bg-blue-600 ${loading ? `w-full transition-all duration-[10s]` : `w-0`}`}></span>
          </div>
         {loading &&  <p className="mt-2 text-gray-600">Loading...</p>}
        </div>

       {!isImageLoaded &&  <div className="relative flex-grow w-full flex gap-2 p-2 justify-center items-center">
          <input
            type="text"
            id="description"
            name="description"
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}
            className="w-1/3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Generate Image
          </button>
        </div>}
        { isImageLoaded && <div className="btn-container flex gap-2 p-2 ">
        <button onClick={()=>{setImageLoaded(false)}} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
            Generate Another
          </button>
          <a  href={image} download className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md">
            Download
          </a>
        </div>}
      </form>
    </>
  );
};

export default Output;

