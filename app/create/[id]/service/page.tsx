'use client'
import { createDoctorSpeciality } from '@/app/actions/userActions'
import { ButtonBar, Categories} from '@/app/components'
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
    <ButtonBar/>
   </form>
   </div>
  )
}

export default Listing