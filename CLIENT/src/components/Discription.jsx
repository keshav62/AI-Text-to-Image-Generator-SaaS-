import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion' 

function Discription() {
  return (
    <motion.div
    initial={{opacity : 0.2 , y:100}} 
      transition={{duration : 1}} 
      whileInView={{opacity : 1 , y : 0}} 
      viewport={{once : true}}
     className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals.</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg '/>

        <div className=''>
          <h2 className= 'text-3xl font-medium max-w-lg mb-4'>Introducing AI-powered Text to image Generator.</h2>
        
          <p className='text-gray-600 mb-4'>
            Easily bring your idea to life with our free AI-Image generator. Whether you need stunning visuals or unique imagery. our tools transforms your text into eye-catching images with just a few clicks. Imagin it, describe it and watch it come to life instantly.
          </p>
          <p className='text-gray-600'>
            Simply type in a text prompt, and out cutting-edge AI will high quality images in a seconds. From product visual to character designs and portraits, even concepts that don't yet exits can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
          </div> 
        <div>

        </div>
      </div>
    </motion.div>
  )
}

export default Discription
