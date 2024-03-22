'use client'

import { medicalSpecializations } from "@/app/utils/specials"
import { useState } from "react"
import Image from 'next/image'

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  return (
   <div 
   className="
   grid
   sm:grid-cols-4
   mt-12
   w-[80%]
   mx-auto
   gap-8
   ">
    {medicalSpecializations.map((item)=> {
        return(
            <div 
            onClick={()=> setSelectedCategory(item.title)}
            className={`${ selectedCategory === item.title ? 'border-blue-500 transition-all': ''}
            flex
            flex-col
            justify-center
            cursor-pointer
            border
            rounded-lg
            p-4
            items-center
        `}
            key={item.id}>
            <Image
            src={item.logoUrl}
            alt={item.title}
            width={40}
            height={40}
            />
            <h1 
            className="
            text-xs
            "
            >{item.title}</h1>
            </div>
        )
    })}
   </div>
  )
}

export default Categories