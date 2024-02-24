import React from 'react'
import ReviewCard from '../components/ReviewCard'
import cutomer from '../assets/images/customer.png'

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
        <h1 className='text-5xl font-semibold  text-center pb-10'>Customer's Review</h1>
        <div className='flex flex-col md:flex-row  gap-5 mt-5'>
            <ReviewCard sorce={cutomer} alter="not found" name="Jone dow"/>
            <ReviewCard sorce={cutomer} alter="not found" name="Jone dow"/>
            <ReviewCard sorce={cutomer} alter="not found" name="Jone dow"/>
        </div>
    </div>
  )
}

export default Reviews