import React from 'react'
import cross from '../assets/cross.png'
import cross2 from '../assets/cross2.png'
import logo from '../assets/logo.png'

function Nav() {
    function navshow (){
        var x = document.getElementById("show");
        var y = document.getElementById("showe");
        var z = document.getElementById("hide");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none"
      } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block"
    
      }
      }
  return (
    <div>
        <nav>
      <div className=' md:flex md:w-full'>
      <div>
      <img src={logo} alt='logo'></img></div>
      <div>
      <button className='sm:mx-44' onClick={navshow}>
      <img id="hide" className='block ml-72 -my-8 md:hidden' src={cross} alt='cross'></img>
      <img id='showe' className=' hidden ml-72 -my-8' src={cross2} alt='cross'></img>
      
      </button>
      </div>


      <div className="group inline-block  relative">

                <ul id='show' className="absolute mx-36s sm:mx-96 md:flex md:-my-3 md:-mx-52 lg:-mx-20 xl:-mx-14 lg:left-10 xl:left-80 sm:left-6 ease-in-out md:shadow-none hidden text-black font-semibold  shadow-md w-52 z-20">
                    <li className="">
                        <a className=" bg-white hover:text-soft-orange duration-500 py-6 px-6 block " href="/">Home</a>
                    </li>
                    
                    <li className="">
                    <a className="bg-white  hover:text-soft-orange duration-500 py-6 px-6 block" href="/">New</a>
                    </li>
                    
                    <li className="">
                        <a className=" bg-white hover:text-soft-orange duration-500 py-6 px-6 block" href="/">Popular</a>
                    </li>
                    
                    <li class="">
                        <a className=" bg-white  hover:text-soft-orange duration-500 py-6 px-6 block" href="/">Trending</a>
                    </li>
                    
                    <li class="">
                        <a className=" bg-white  hover:text-soft-orange py-6 duration-500 px-6 block" href="/">Catagories</a>
                    </li>
                </ul>
            </div></div>
    </nav>
    </div>
  )
}

export default Nav