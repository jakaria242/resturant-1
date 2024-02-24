import React, { useState } from 'react'
import { IoRestaurantSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import Button from '../layout/Button';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";





const Navbar = () => {

   let [menu, setMenu] = useState()

   let handleChange = () => {
    setMenu(!menu)
   }

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
                    <div className='flex flex-row items-center gap-1 '>
                    <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Dishes</Link>
                    <BiChevronDown size={25} className="cursor-pointer"/>
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
                <div className='cursor-pointer md:hidden flex item-center'>
                    {
                        menu ?
                        <IoClose  size={29} onClick={handleChange}/>
                        :
                        <TiThMenu size={29} onClick={handleChange}/>
                    }

                </div>
            </div>
              <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Home</Link>
                <Link to="dishes" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Dishes</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>About</Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Menu</Link>
                <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>Reviews</Link>
                <Button text="Login"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar