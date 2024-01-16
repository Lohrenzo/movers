import { Link } from "react-router-dom";

const SingleWorkComponent = ({img, paragraph, id}) => {
  return (
    <div className='relative grid grid-cols-1 rounded-md shadow-md group cursor-pointer'>
        <img src={img} alt="Work Image" className='object-cover rounded-md' />
        <Link to={`/works/detail/${id}`} className='grid place-items-center absolute top-0 w-full h-full transition-all transform scale-0 group-hover:scale-100 duration-200 ease-in-out rounded-md bg-black/55 text-white hover:text-white p-2'>{paragraph}</Link>
    </div>
  )
}

export default SingleWorkComponent;