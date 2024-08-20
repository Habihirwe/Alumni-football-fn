import React from 'react'

function Button(props) {
  return (
    <div className='bg-slate-500 rounded text-white md:ml-8 py-2 px-6 w-[200px] text-center font-bold md:py-2 md:px-6 hover:bg-yellow-300  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg'>
     {props.children}
    </div>
  )
}

export default Button