'use client'
import { createDoctorSpeciality } from '@/app/actions/userActions'
import { Categories, FormState } from '@/app/components'
import Link from 'next/link'


const Listing = ({params}: {params:{id:string}}) => {
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
   <form 
   action={createDoctorSpeciality}
   >
    <input 
    type='hidden'
    name='id'
    value={params.id}
    />
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
          <FormState/>
      </div>
    </div>
   </form>
   </div>
  )
}

export default Listing