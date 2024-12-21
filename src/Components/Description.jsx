import { motion } from "motion/react" ;

const Description = () => {
  return (
    <>
    <section className="text-gray-600 bg-blue-100 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <motion.div
  initial={{opacity:0.3 , y:50}}
  transition={{delay:0.4 , duration :0.5}}
  whileInView={{opacity : 1 , y :0}}
  className="text-center flex flex-col w-full justify-center align-middle mb-16">
  <h1 className="text-center mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Create AI Images</h1>
  <p className="mx-auto mt-6 mb-4 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Turn your imaginations into visuals</p>
  </motion.div>
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <motion.img
      initial={{opacity:0.4 , x:-100 }}
      transition={{ duration:1.5}}
      whileInView={{opacity : 1 , x:0}} alt="feature" className="object-cover object-center h-96 w-full" src="spaceship.jpg"/>
    </div>
    <motion.div
     initial={{opacity:0.4 , x: 100 }}
     transition={{ duration:1.5}}
     whileInView={{opacity : 1 , x:0}} className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"> 
      <h2 className="text-2xl font-bold mb-8">Transform Words into Stunning Visuals with Ease!</h2>
      <p className="text-xl font-medium text-gray-400">Unleash the power of AI to turn your text into breathtaking images in just a few clicks. Whether you are a designer, content creator, or simply someone with a creative spark, our app lets you bring your ideas to life effortlessly. From conceptual art to realistic scenes, type your imagination and let the magic happen. No design skills needed—just your words and our AI to create limitless possibilities. Experience creativity redefined!</p>
      
    </motion.div>
  </div>
</section>

    </>
  )
}

export default Description
