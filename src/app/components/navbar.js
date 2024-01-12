import { IoBeer } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import Nav_button from "./nav_button";

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-4 md:space-x-6 p-4 text-5xl'>

      <Nav_button href={"/beer"} icon={<IoBeer />} />
      <Nav_button href={"/community"} icon={<IoPersonAddSharp />} />
      <Nav_button href={"/events"} icon={<MdEventAvailable/>} />

    </div>
  )
}

export default Navbar 