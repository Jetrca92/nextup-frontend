import Image from "next/image"
import { FC } from "react"

const EditIcon: FC = () => {
  return (
    <Image 
      src="/icons/edit-icon.png"
      alt="Edit Icon"
      width={15} 
      height={15} 
    />
  )
}

export default EditIcon