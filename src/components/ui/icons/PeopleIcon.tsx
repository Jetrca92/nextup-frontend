import Image from "next/image"
import { FC } from "react"

const PeopleIcon: FC = () => {
  return (
    <Image
      src="/icons/people-icon.png"
      alt="People Icon"
      width={15}
      height={15}
    />
  )
}

export default PeopleIcon