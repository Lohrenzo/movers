// Images
import pricingImg from '../assets/pexels-cottonbro-studio-4554230.jpg';

// React Router Dom
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section 
        style={{
        backgroundImage: `linear-gradient(45deg, #000000c7, #000000d7, #69c50799), url(${pricingImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        }}
        className='py-[4rem] px-[2rem] lg:px-[8rem] font-[Kanit]'
    >
        {/* <h2 className='text-[2rem] text-center text-white font-bold mb-6 capitalize'>Prices</h2> */}
        <div className="grid lg:grid-cols-2 gap-x-4 gap-y-[3rem] grid-cols-1">
            <div className='grid grid-cols-1 gap-4 lg:text-[2.6rem] text-[2rem] lh:h-[40vh] h-fit font-bold'>
                <p>24/7 Support</p>
                <p>Same Day Booking On Availability</p>
                <p className='lg:grid hidden lg:place-items-start place-items-center lg:mx-0 mx-auto'>
                    <Link to="/contact" className='bg-[#96C507] hover:bg-[#69c507] duration-200 transition-all uppercase rounded py-3 px-6 text-[1rem] text-[#ffffff] hover:text-[#ffffff] font-semibold'>contact us</Link>
                </p>
            </div>
            <div className='flex lg:flex-row flex-col gap-x-24 gap-y-[3rem] items-center justify-between lg:h-[40vh] h-fit'>
                <div className='bg-[#ffffff9a] hover:bg-[#ffffffc4] text-black cursor-default lg:hover:scale-110 duration-200 transition-all flex flex-col items-center justify-between rounded-md h-full w-full px-3 py-8'>
                    <h3 className='uppercase text-[1.6rem] font-semibold'>half load</h3>
                    <p className='text-[3rem] font-bold'>£200</p>
                    <p className='capitalize'>"within 2 hours"</p>
                </div>

                <div className='bg-[#2626269a] hover:bg-[#262626c2] text-white cursor-default lg:hover:scale-110 duration-200 transition-all flex flex-col items-center justify-between rounded-md h-full w-full px-3 py-8'>
                    <h3 className='uppercase text-[1.6rem] font-semibold'>full load</h3>
                    <p className='text-[3rem] font-bold'>£400</p>
                    <p className='capitalize'>"within 3.5 hours"</p>
                </div>

                <p className='grid lg:hidden place-items-center lg:mx-0 mx-auto'>
                    <Link to="/contact" className='bg-[#96C507] hover:bg-[#69c507] duration-200 transition-all uppercase rounded py-3 px-6 text-[1rem] text-[#ffffff] hover:text-[#ffffff] font-semibold'>contact us</Link>
                </p>
            </div>
        </div>
    </section>

  )
}

export default Pricing;