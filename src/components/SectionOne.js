import React from 'react'
import desktop from '../assets/desktop.jpg'
import mobile from '../assets/mobile.jpg'
function SectionOne() {
  return (
    <div>
  <div className='md:flex'>
  <div className='md:flex-col'>
  <div className='pt-6 pb-4 z-0'>
    <img className="md:hidden" src={mobile} alt='mobileimage'></img>
    <img className='hidden md:block md:w-11/12' src={desktop} alt='desktopimage'></img>
  </div>
  <div className='md:flex md:w-11/12  md:pr-6 md:pt-8 md:pb-12 md:gap-x-12 md:mx-5'>
  <div>
    <p className='font-Inter font-bold text-5xl lg:mx-5 pt-3 pb-3 '>The Bright Future of Web 3.0?</p>
  </div>
  <div className='text-base text-dark-grayish-blue '>
    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling the promise?<br></br><br></br>
    <button className='p-3 pl-8 text-white pr-8 hover:bg-black duration-500 bg-soft-red font-semibold'>READ MORE</button>
  </div>
  </div>
  </div>
  <div className='bg-slate-950 my-12 md:p-12 p-4 md:my-6 md: md:h-fit   text-white'>
    <div className='text-yellow-400 text-3xl font-semibold'>New</div>
    <div className='text-lg pt-5 hover:text-soft-orange duration-300 text-off-white' >Hydrogen VS Electric Cars</div>
    <div className=' pt-2 pb-5 text-grayish-blue'>Will hydrogen-fueled cars ever catch up to Evs?</div>
    <hr></hr>
    <div className='text-lg pt-5 hover:text-soft-orange duration-300 text-off-white'>The Downsides of AI Artistry</div>
    <div className=' pt-2 pb-5 text-grayish-blue'>What are the possible adverse effects of on-demand AI image generation?</div>
    <hr></hr>
    <div className='text-lg pt-5 hover:text-soft-orange duration-300 text-off-white' >Is VC Funding Drying Up?
    </div>
    <div className='pt-2 pb-5 text-grayish-blue'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
  </div>
  </div>

    </div>
  )
}

export default SectionOne;