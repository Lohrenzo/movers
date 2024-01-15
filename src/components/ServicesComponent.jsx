
// Components
import ServiceRepresentation from './ServiceRepresentation';

// Icons
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TfiPackage } from "react-icons/tfi";
import { BsBuilding } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

const ServicesComponent = () => {
  return (
    <section className='bg-[#0C202A] text-white py-[4rem] px-[2rem] lg:px-[8rem]'>
        <h2 className='text-[2rem] font-semibold mb-6 capitalize'>Services we offer</h2>
        <p className='text-justify mb-2 text-gray-400'>If you want high quality and professional services, look no further.</p>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 py-4'>
            <ServiceRepresentation icon={HiOutlineHomeModern} header="domestic" paragraph="Garden and shed clearance, end of tenancy clearance, lofy clearance."/>
            <ServiceRepresentation icon={TfiPackage} header="site" paragraph="Wait and load, light demolition, strip out, builders waste."/>
            <ServiceRepresentation icon={BsBuilding} header="commercial" paragraph="Hotel clearance, show clearance, warehouse clearance, restaurant clearance, office clearance."/>
            <ServiceRepresentation icon={GrHostMaintenance} header="maintenance" paragraph="Garden Maintenance, property maintenance, block maintenance, office maintenance."/>
        </div>
    </section>
  )
}

export default ServicesComponent;