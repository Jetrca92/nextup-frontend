import Image from "next/image"
import { FC } from "react"

const FacebookIcon: FC = () => {
  return (
    <Image
      src="/icons/facebook-icon.png"
      alt="Facebook Icon"
      width={24}
      height={24}
    />
  )
}

export default FacebookIcon