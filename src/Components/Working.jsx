import { motion } from "motion/react" ;

const Working = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <motion.div className="container px-5 py-24 mx-auto" 
  initial={{opacity : 0.3 , y: 100}}
  transition={{duration :0.5}}
  whileInView={{opacity: 1 , y:0}}
  viewport={{once:true}}>
  <h1 className="text-center mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">How it works</h1>
  <p className="mx-auto mt-6 mb-24 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Transform Words Into Stunning Images</p>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <img className="w-16 cursor-pointer" src="eyeCare.png" alt="vision" />
      </div>
      <motion.div
      initial={{opacity : 0.3 , y: 100}}
      transition={{duration :0.5}}
      whileInView={{opacity: 1 , y:0}}
      viewport={{once:true}} className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-700 text-2xl title-font  font-bold mb-2 ">Describe your vision</h2>
        <p className="leading-relaxed text-base text-gray-600">Type a phrase,sentence, or paragraph that describes the imageyou want to create.</p>
      </motion.div>
    </div>
    <motion.div
    initial={{opacity : 0.3 , y: 100}}
    transition={{duration :0.5}}
    whileInView={{opacity: 1 , y:0}}
    viewport={{once:true}} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-700  title-font font-bold mb-2 text-2xl">Watch the magic</h2>
        <p className="leading-relaxed text-base text-gray-600">Our AI-powered engine will transform your text into a high quality,unique image in seconds.</p>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img className="w-16 cursor-pointer" src="magicwand.png" alt="magicwand" />
      </div>
    </motion.div>
    <motion.div
    initial={{opacity : 0.3 , y: 100}}
    transition={{duration :0.5}}
    whileInView={{opacity: 1 , y:0}}
    viewport={{once:true}} className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <img className="w-16 cursor-pointer" src="download.png" alt="download" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-blue-700 text-2xl title-font font-bold mb-2">Download and share</h2>
        <p className="leading-relaxed text-base text-gray-600">Instantly download your creation or share it with the world directly from our platform.</p>
      </div>
    </motion.div>
  </motion.div>
</section>

    </>
  )
}

export default Working


