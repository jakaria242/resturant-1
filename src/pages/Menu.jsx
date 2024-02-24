import React from 'react'
import DishesCard from '../components/DishesCard'
import img4 from '../assets/images/img4.jpg'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-5 lg:px-32'>
       <h1 className='font-semibold text-5xl text-center pb-10 lg:pt-8'>Premium Menu</h1>
       <div className='flex flex-wrap justify-center gap-8'>
        <DishesCard sorce={img4} alter="Not Found" price="$16.99" title="Delicious Dish"/>
        <DishesCard sorce={img4} alter="Not Found" price="$18.99" title="Delicious Dish"/>
        <DishesCard sorce={img4} alter="Not Found" price="$14.99" title="Delicious Dish"/>
       </div>
    </div>
  )
}

export default Menu