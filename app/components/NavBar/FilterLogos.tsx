'use client'
import {medicalSpecializations} from '@/app/utils/specials'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
const FilterLogos = () => {
    const pathname = usePathname()

  return (
    <div 
    className={`
    ${pathname !== '/'? 'hidden': 'block'}
    flex
    gap-4
    overflow-x-auto
    mt-12
    md:mt-[60px]
    no-scrollbar
    max-w-7xl
    mx-auto
`
   } >
        {
            medicalSpecializations.map((item)=> {
                return (<Logo 
                    key={item.title} 
                    id={item.id}
                    logoUrl={item.logoUrl}
                    title={item.title}
                  
                />)
            })
        }
    </div>
  )
}

export default FilterLogos