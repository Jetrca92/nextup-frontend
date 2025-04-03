import Image from "next/image"
import { FC } from "react"

interface NavbarAvatarProps {
  imageSrc?: string
}

const NavbarAvatar: FC<NavbarAvatarProps> = ({ imageSrc = "/images/empty-avatar.png" }) => {
  return (
    <Image
      src={imageSrc}
      alt="User avatar"
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
