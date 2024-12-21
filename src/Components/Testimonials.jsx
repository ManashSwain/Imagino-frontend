import { motion } from "motion/react" ;


const Testimonials = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <motion.h1
     initial={{opacity:0.3 , y:100}}
     transition={{ duration :0.5}}
     whileInView={{opacity : 1 , y :0}}
    className="text-center mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Customer testimonials</motion.h1>
    <motion.p
     initial={{opacity:0.3 , y:100}}
     transition={{ duration :0.5}}
     whileInView={{opacity : 1 , y :0}}
    className="mx-auto mt-6 mb-4 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">What our users are saying</motion.p>
    <div className="flex flex-wrap  my-12 ">
      <motion.div
      initial={{opacity:0.3 , y:100}}
      transition={{ duration :0.5}}
      whileInView={{opacity : 1 , y :0}}
      className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="people1.png"/>
          <p className="leading-relaxed">I was skeptical at first, but the results exceeded all my expectations! The generated images are vibrant, unique, and incredibly professional. Your platform has made content creation a joy rather than a chore.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Sophia Martinez</h2>
          <p className="text-gray-500">Digital Marketer</p>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0.3 , y:50}}
      transition={{duration :0.5}}
      whileInView={{opacity : 1 , y :0}}
      className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="people2.png"/>
          <p className="leading-relaxed">I was amazed at how intuitive and fast the process was. No complicated tools or settings—just type, click, and voilà! As a small business owner, this has been a game-changer for creating social media content effortlessly</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">James Patel</h2>
          <p className="text-gray-500">Small Business Owner</p>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity:0.3 , y:50}}
      transition={{ duration :0.5}}
      whileInView={{opacity : 1 , y :0}}
      className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="people3.png"/>
          <p className="leading-relaxed">Absolutely mind-blowing! I typed a few words, and within seconds, I had stunning visuals that perfectly matched my imagination. Your platform turned my simple idea into a masterpiece. It is like having a personal designer at my fingertips!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Emily Carter</h2>
          <p className="text-gray-500">Graphic Designer</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </>
  )
}

export default Testimonials
