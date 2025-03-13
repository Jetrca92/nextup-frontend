import Image from "next/image"
import { FC } from "react"

const NavbarLogo: FC = () => {
  return (
    <Image
      src="/images/navbar-logo.png"
      alt="Nextup Logo"
      width={38.1}
      height={40}
    />
  )
}

export default NavbarLogo
