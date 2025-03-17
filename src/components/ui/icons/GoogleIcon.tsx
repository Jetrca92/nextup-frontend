import Image from "next/image"
import { FC } from "react"

const GoogleIcon: FC = () => {
  return (
    <Image
      src="/icons/google-icon.png"
      alt="Google Icon"
      width={24}
      height={24}
    />
  )
}

export default GoogleIcon