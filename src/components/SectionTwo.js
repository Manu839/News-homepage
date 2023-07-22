import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
function SectionTwo() {
  return (
    <div>
  <div className='md:flex md:gap-10'>
  <div className='pb-5'>
    <div className='flex align-middle'>
    <div>
    <img src={image1} className='' alt='image1'></img></div>
    <div>
    <div className='pl-5 text-gray-400 text-3xl'>01</div>
    <div className='pl-5 font-bold hover:text-soft-red duration-300'>Reviving Retro PCs</div>
    <div className='pl-5 text-dark-grayish-blue'>What happens when old PCs are given modern upgrades?</div></div>
    </div>
  </div>
  <div className='pb-5'>
    <div className='flex align-middle'>
      <div>
    <img className='w-5/6 md:w-fit' src={image2} alt='image2'></img></div>
    <div>
    <div className=' md:pl-5 text-gray-400 text-3xl'>02</div>
    <div className=' md:pl-5 font-bold hover:text-soft-red duration-300'>Top 10 Laptops of 2022</div>
    <div className=' md:pl-5  text-dark-grayish-blue'>Our best picks for various needs and budgets.</div></div>
  </div>
  </div>
  <div className='flex align-middle'>
    <div>
    <img className='w-44 md:w-fit' src={image3} alt='image3'></img></div>
    <div>
    <div className='pl-5 text-3xl text-gray-400'>03</div>
    <div className='pl-5 font-bold hover:text-soft-red duration-300'>The Growth of Gaming</div>
    <div className='pl-5 text-dark-grayish-blue'>How the pandemic has sparked fresh opportunities.</div></div>
  </div>
  </div>
  </div>
   
  )
}

export default SectionTwo;