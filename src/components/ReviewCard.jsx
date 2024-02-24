import React from 'react'

const ReviewCard = ({sorce, alter, name}) => {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-lightColor md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.60)_0px_3px_8px]'>
        <div className='text-center'>
            <p className='text-lightColor '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolores officia delectus similique a laudantium assumenda temporibus commodi, laborum esse?</p>
        </div>
        <div className='flex flex-row justify-center items-center mt-4 gap-4'>
            <img src={sorce} alt={alter}/>
            <h3 className='font-semibold text-xl'>{name}</h3>
        </div>
    </div>
  )
}

export default ReviewCard