import Link from "next/link"

const Nav_button = ({icon, href}) => {
  return (
    <div className='hover:text-lime-500 hover:scale-110'>
        <Link href={href}>
        {icon}
        </Link>        
    </div>
  )
}

export default Nav_button