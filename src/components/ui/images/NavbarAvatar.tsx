import Image from "next/image"
import { FC } from "react"

const NavbarAvatar: FC = () => {
  return (
    <Image
      src="/images/empty-avatar.png"
      alt="Navbar avatar"
      width={40}
      height={40}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  )
}

export default NavbarAvatar
