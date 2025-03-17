import Image from "next/image"
import { FC } from "react"

const EmailIcon: FC = () => {
  return (
    <Image
      src="/icons/email-icon.png"
      alt="Email Icon"
      width={16.67}
      height={13.33}
    />
  )
}

export default EmailIcon