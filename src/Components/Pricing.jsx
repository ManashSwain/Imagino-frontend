import { useContext } from "react";
import { Appcontext } from "../Context/ContextProvider";
import { motion } from "motion/react" ;

const Pricing = () => {
  const {user} = useContext(Appcontext)
  return (
   <>
   <div className="pricing relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
    <div className="mx-auto aspect-[1155/678] w-[72.1875rem]  opacity-30" ></div>
  </div>
  <motion.div
   initial={{opacity:0.3 , y:100}}
   transition={{ duration :0.5}}
   whileInView={{opacity : 1 , y :0}} className="mx-auto max-w-4xl text-center">
    <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
    <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl ">Choose the right plan for you</p>
  </motion.div>
  <motion.p
   initial={{opacity:0.3 , y:100}}
   transition={{ duration :0.5}}
   whileInView={{opacity : 1 , y :0}} className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Choose an affordable plan that’s packed with the best benefits for you .</motion.p>
  <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <motion.div
    initial={{opacity:0.3 , y:100}}
    transition={{ delay : 0.2 , duration :0.5}}
    whileInView={{opacity : 1 , y :0}} className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
      <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600">Basic</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-gray-900">₹50</span>
        <span className="text-base text-gray-500">/25 credits</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-600">The perfect plan if you&#039;re just getting started with our product.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          25 credits
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Up to 25 generated images
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          25 downloads
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          24-hour support response time
        </li>
      </ul>
      <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">{user ? "Purchase" : "Get started today"  }</a>
    </motion.div>
    <motion.div
    initial={{opacity:0.3 , y:100}}
    transition={{ delay : 0.2 ,duration :0.5}}
    whileInView={{ opacity : 1 , y :0}} className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
      <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-400">Advanced</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-white">₹100</span>
        <span className="text-base text-gray-400">/100 credits</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-300">The perfect plan if you are starting with your team.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          100 credits
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Up to 100 generated images
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          100 downloads
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Future offers
        </li>
       
      </ul>
      <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">{user ? "Purchase" : "Get started today"  }</a>
    </motion.div>
  </div>
</div>

   </>
  )
}

export default Pricing
