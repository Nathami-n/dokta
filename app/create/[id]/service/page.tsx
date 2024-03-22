'use client'
import { Categories } from '@/app/components'



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
   </form>
   </div>
  )
}

export default Listing