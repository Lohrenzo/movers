import React from 'react'

// Images
import faqsImg from '../assets/pexels-shvets-production-7203701.jpg';

// Component
import Accordion from './Accordion';

const Faqs = () => {
  return (
    <section className='bg-white py-[4rem] px-[2rem] lg:px-[8rem]'>
        <h2 className='text-[2rem] text-black font-semibold mb-6 text-center capitalize'>Frequently Asked Questions</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6">
            <div>
                <div className="shadow bg-white text-black">
                    <Accordion header="Do you move unique or very large items?" paragraph="Yes! We move almost all items. Be sure to let your Gorilla Movers representative know ahead of time in case it requires a third mover or special equipment."/>
                    <hr />
                    <Accordion header="How do you handle fragile items?" paragraph="Yes! We move almost all items. Be sure to let your Gorilla Movers representative know ahead of time in case it requires a third mover or special equipment."/>
                    <hr />
                    <Accordion header="Do you move unique or very large items?" paragraph="Yes! We move almost all items. Be sure to let your Gorilla Movers representative know ahead of time in case it requires a third mover or special equipment."/>
                </div>
            </div>
            <img src={faqsImg}className='lg:block hidden h-[50vh] w-full rounded-lg shadow object-cover' alt="FAQs Image" />
        </div>
    </section>
  )
}

export default Faqs;