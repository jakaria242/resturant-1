import React from 'react'
import { IoRestaurantSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import Button from '../layout/Button';

const Navbar = () => {
  return (
    <div className='fixed w-full'>
        <div>
            <div className='flex flex-row justify-between items-center p-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                <div className='flex flex-row items-center gap-2 cursor-pointer'>
                    <span><IoRestaurantSharp size={32}/></span>
                    <h1 className='text-brightColor text-4xl font-semibold '>FoodWeb</h1>
                </div>
                <nav className='hidden md:flex flex-row items-center text-2xl font-medium gap-8'>
                <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                 <div className='relative group '>
                    <div>
                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Dishes</Link>
                    </div>
                    <ul className='flex justify-center	 items-center absolute hidden space-y-6 group-hover:block bg-white border border-gray-300 rounded-lg p-5 left-[50%] translate-x-[-50%]'>
                        <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Spyci</Link>
                        </li>
                        <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Tasty</Link>
                        </li>
                        <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Delicious</Link>
                        </li>
                        <li>
                        <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Crispy</Link>
                        </li>
                    </ul>
                 </div>
                <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Menu</Link>
                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Reviews</Link>
                <Button text="Login"/>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar