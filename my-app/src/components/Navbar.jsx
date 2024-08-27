import React, { useState } from 'react'


function Navbar() {
    let Links=[
      { name: "HOME", link: "/" },
      { name: "ABOUT", link: "/about" },
      { name: "HISTORY", link: "/history" },
      { name: "EVENTS", link: "/activities" },
      { name: "TEAM", link: "/team" }
  ];

  
    const [open,setOpen]=useState(false);

  return (
  <nav className='md:flex bg-black top-0 left-0 right-0 w-full'>
    <div className='md:flex items-center justify-between py-4 px-7 md:px-10 w-full'>
        <div className='flex flex-row items-center space-x-1 p-4 font-bold cursor-pointer'>
           <span className='text-xl text-white flex items-center '>
           <ion-icon name="logo-ionic"></ion-icon>
           <h2 className='text-xl text-white ml-4'>designer</h2>
           </span>
          
          
         
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl top-8 absolute right-8 text-white md:hidden cursor-pointer'>
        <ion-icon name={open ? "close":"menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacit'} md:opacity-100 opacity-0 overflow-hidden`}>
            {
             Links.map((link)=>(
                <li  className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
                    <a href={link.link} className='text-white hover:text-yellow-300 duration-300'>{link.name}</a>
                </li>


             ))
            }
            <div className='px-2'>
            <button className="bg-slate-500 px-4 py-2 font-bold text-white rounded  hover:bg-yellow-300  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg">
              CONTACT US
            </button>
            </div>
           
        </ul>
        
    </div>
 
  </nav>
  )
}

export default Navbar