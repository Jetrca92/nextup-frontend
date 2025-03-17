import Image from "next/image"
import { FC } from "react"

const EmptyAvatar: FC = () => {
  return (
    <Image
      src="/images/empty-avatar.png"
      alt="Empty avatar"
      width={64}
      height={64}
      style={{
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  )
}

export default EmptyAvatar
