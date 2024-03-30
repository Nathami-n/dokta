import { FormState } from "."
import Link from 'next/link';
const ButtonBar = () => {
  return (
    <>
    <div className='
    fixed
    w-full
    border-t
    border-3
    z-10
    bg-white
    h-24
    bottom-0
    '>
      <div className='
      flex 
      items-center
      justify-between
      mx-auto
      h-full
      p-8
      lg:p-10
      '>
        <button 
        className='
        bg-gray-200
        
         p-2
         rounded-lg
         w-[100px]
        '
        >
         <Link 
         href="/"
         >
         Cancel
         </Link>
          </button>
          <FormState/>
      </div>
    </div>
    </>
  )
}

export default ButtonBar