import Image from "next/image"
import { FC } from "react"

interface AvatarProps {
  width?: number
  height?: number
  imageSrc?: string
}

const Avatar: FC<AvatarProps> = ({ width = 64, height = 64, imageSrc = "/images/empty-avatar.png" }) => {
  return (
    <Image
      src={imageSrc}
      alt="Avatar"
      width={width}
      height={height}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  )
}

export default Avatar
