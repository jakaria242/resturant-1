import React from 'react'
import DishesCard from '../components/DishesCard'
import img1 from "../assets/images/img1.jpg"


const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-5xl font-semibold pt-24 text-center pb-10'>Our Dishes</h1>
        <div className='flex flex-wrap justify-center gap-8'>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$10.99"/>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$12.99"/>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$15.99"/>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$11.99"/>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$13.99"/>
            <DishesCard sorce={img1} alter="Not Found" title="Tasty Dish" price="$10.99"/>
        </div>
    </div>
  )
}

export default Dishes