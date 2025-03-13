import Image from "next/image"
import { FC } from "react"

const FooterLogo: FC = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Nextup Logo"
      width={115}
      height={24}
    />
  )
}

export default FooterLogo