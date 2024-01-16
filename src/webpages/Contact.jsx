// Images
import contactImg from '../assets/pexels-jéshoots-4831.jpg';

const Contact = () => {
    return (
        <main>
            <section
                className='h-[40vh] flex items-center justify-center text-gray-400'
                style={{
                    backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${contactImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'scroll',
                }}
            >
                <h2 className='font-bold text-[3rem] capitalize'>contact us</h2>
            </section>
        </main>
    )
}

export default Contact;