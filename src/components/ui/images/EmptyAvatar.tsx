import Image from "next/image"
import { FC } from "react"

interface EmptyAvatarProps {
  width?: number
  height?: number
}

const EmptyAvatar: FC<EmptyAvatarProps> = ({ width = 64, height = 64 }) => {
  return (
    <Image
      src="/images/empty-avatar.png"
      alt="Empty avatar"
      width={width}
      height={height}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  )
}

export default EmptyAvatar
