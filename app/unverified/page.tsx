
import Link from 'next/link'
import { BiErrorCircle } from 'react-icons/bi'
const Unverified = () => {
  return (
    <div>
        <div 
        className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-screen
        "
        >
            <div 
            className='
            p-2
            h-24
            w-24
            rounded-full
            bg-red-500/10
            flex
            justify-center
            items-center
            '>
                <BiErrorCircle 
                className="
                text-3xl
                text-rose-600
                "/>
            </div>
            <h1>Seems like you are not a Doctor</h1>
            <Link href={'/'} className='underline'>Back Home</Link>
        </div>
    </div>
  )
}

export default Unverified