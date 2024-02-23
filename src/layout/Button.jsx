import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button  className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all duration-500 rounded-full'>
        {text}
        </button>
    </div>
  )
}

export default Button