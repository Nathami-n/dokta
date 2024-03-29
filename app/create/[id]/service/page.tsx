'use client'
import { Categories } from '@/app/components'
import Link from 'next/link'


const Listing = () => {
  return (
    <div className='
    mt-10
    '>
        <div>
            <h1
            className='
            font-bold
            text-2xl
            text-center
            text-rose-400

            '
            >Which of these best describe your services?</h1>
        </div>
   <form>
    <Categories/>
    <div className='
    fixed
    w-full
    border-t
    border-3
    z-10
    bg-white
    h-24
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
          <button 
          className='
          bg-blue-500
          hover:bg-rose-500
          transtion-colors
          text-white
           p-2
           rounded-lg
           w-[100px]
          '
          >
            Save
          </button>
      </div>
    </div>
   </form>
   </div>
  )
}

export default Listing