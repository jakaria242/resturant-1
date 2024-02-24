import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from '../layout/Button';


const DishesCard = ({sorce, alter, title, price, }) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.60)_0px_3px_8px] rounded-lg'>
        <img className='rounded-xl' src={sorce} alt={alter} />
        <div className='space-y-4'>
            <h3 className='text-xl font-bold text-center pt-6'>{title}</h3>
            <div className='flex flex-row justify-center items-center'>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarFill className='text-brightColor'/>
            <BsStarHalf className='text-brightColor'/>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
                <h3 className='font-semibold text-lg'>{price}</h3>
                <Button text="Buy Now"/>
            </div>
        </div>
    </div>
  )
}

export default DishesCard