import Image from "next/image"

const Header = () => {
  return (
    <div>
        <Image
          src="/logo.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="animate-logo"
        />
    </div>
  )
}

export default Header