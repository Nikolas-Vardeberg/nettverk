import * as React from 'react'
import Image from "next/image"

export type ImageBlock = {
  image: any;
  imageAlt: string;
}

export type Props = ImageBlock

export const ImageBlock = ({
  image,
  imageAlt
}: Props) => {
  return (
    <div className='flex justify-start items-start py-10 px-8 md:px-20 max-w-7xl'>
        <Image 
            src={image}
            alt={imageAlt}
            className='h-full w-full'
        />
    </div>
  )
}