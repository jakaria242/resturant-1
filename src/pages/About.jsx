import React from 'react'
import Button from '../layout/Button'
import aboutimg from '../assets/images/about.jpg'


const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center px-5 lg:px-32 gap-10'>
            <img className='w-[50%]' src={aboutimg} alt="Not Found" />
            <div className='space-y-8 lg:pt-14'>
                <h3 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h3>
                <p className='text-lg font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo praesentium temporibus voluptates assumenda similique libero distinctio doloremque ipsam totam? Ipsa quidem ullam exercitationem accusamus aliquam dicta dolorem animi ipsum.</p>
                <p className='text-lg font-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi reiciendis dignissimos corporis dicta laudantium esse tenetur, saepe sed repudiandae ullam et quasi! Cupiditate, similique et natus quas dolorem animi.</p>
                <div className='flex justify-center lg:justify-start'>
                    <Button text="Learn More"/>
                </div>
            </div>
        </div>
    )
}

export default About