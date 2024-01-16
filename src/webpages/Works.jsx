// Images
import img1 from '../assets/pexels-tima-miroshnichenko-6169126.jpg';
import img2 from '../assets/pexels-cottonbro-studio-4554230.jpg';
import img3 from '../assets/pexels-norma-mortenson-4391470.jpg';
import img4 from '../assets/pexels-tima-miroshnichenko-6169052.jpg';
import worksImg from '../assets/pexels-tima-miroshnichenko-6169055.jpg';

// Component
import SingleWorkComponent from "../components/SingleWorkComponent";

const Works = () => {
  return (
    <main>
        <section
            className='h-[40vh] flex items-center justify-center text-gray-400'
            style={{
                backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${worksImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
            }}
        >
            <h2 className='font-bold text-[3rem] capitalize'>works</h2>
        </section>

        <section className='bg-white py-[4rem] px-[2rem] lg:px-[8rem] font-[Cambria]'>
            <h2 className='text-[2rem] text-black font-bold mb-6 capitalize'>Our works</h2>
            <div className='grid lg:grid-cols-3 lg:gap-[2rem] gap-6 grid-cols-1'>
                <SingleWorkComponent id="1" img={img1} paragraph="paragraph for our work one ..." />
                <SingleWorkComponent id="2" img={img2} paragraph="paragraph for our work two ..." />
                <SingleWorkComponent id="3" img={img4} paragraph="paragraph for our work three ..." />
                <SingleWorkComponent id="4" img={img3} paragraph="paragraph for our work four ..." />
                <SingleWorkComponent id="5" img={img2} paragraph="paragraph for our work five ..." />
                <SingleWorkComponent id="6" img={img1} paragraph="paragraph for our work six ..." />
                <SingleWorkComponent id="7" img={img1} paragraph="paragraph for our work seven ..." />
                <SingleWorkComponent id="8" img={img2} paragraph="paragraph for our work eight ..." />
                <SingleWorkComponent id="9" img={img4} paragraph="paragraph for our work nine ..." />
                <SingleWorkComponent id="10" img={img3} paragraph="paragraph for our work ten ..." />
                <SingleWorkComponent id="11" img={img2} paragraph="paragraph for our work eleven ..." />
                <SingleWorkComponent id="12" img={img1} paragraph="paragraph for our work twelve ..." />
            </div>
        </section>
    </main>
  )
}

export default Works;