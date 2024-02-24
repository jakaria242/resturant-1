import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-12 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-2xl pb-4 text-brightColor'>FoodWeb</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque, laudantium ipsam
                     a veniam maxime?</p>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Reviews</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Our Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Premium Menu</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contract us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">foodweb@gmail.com</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">+64 859 356 785</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/">Social media</a>
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>@copyright developed by <span className='text-brightColor'>Jakaria </span> | All right reserved</p>
        </div>
    </div>
  )
}

export default Footer