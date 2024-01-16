import { useParams } from 'react-router-dom';

const SingleWorkDetail = () => {
    const { id } = useParams();
    return (
        <section className='bg-white text-black py-[4rem] px-[2rem] lg:px-[8rem]'>
            Details for Work {id}
        </section>
    )
}

export default SingleWorkDetail;