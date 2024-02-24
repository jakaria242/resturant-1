import React from 'react'
import Button from '../layout/Button'


const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url("./assets/images/banner.jpg")] bg-cover bg-no-repeat bg-center'>
        <div className='w-full lg:w-2/3 space-y-8'>
            <h1 className='text-white font-semibold text-6xl w-[900px]'>Elevate Your Inner Foodie with Every Bite</h1>
            <p className='text-white text-2xl w-[900px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sint harum consectetur alias aliquam quas dicta fuga quos accusamus. Distinctio!
            </p>
            <div>

                <Button text="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default Home