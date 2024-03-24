
import useLoginStore from '@/app/zustand/RegisterStore'
import Link from 'next/link'
interface RegisterModalProps {
    login?: string
    signup?:string
}

const Register: React.FC<RegisterModalProps> = ({
    login,
    signup,
}) => {

    const open = useLoginStore((state)=> state.open)
    const close = useLoginStore((state) => state.onClose)
  return (
    <>
    {open ? (
        <div
    className="
    border
    rounded-lg
    shadow-md
    absolute
    top-16
    right-10
    w-[200px]
    flex
    flex-col
    bg-white
    z-10
    "
    >
        <Link 
        onClick={close}
        className='
        text-lg
        font-semibold
        text-blue-500
        hover:text-rose-500
        transition
        w-full
        border-b
        p-2
        '
        href={'/signup'}
        > {signup}
        </Link>
        <Link 
         onClick={close}
         className='
         text-lg
         font-semibold
         text-blue-500
         hover:text-rose-500
         transition
         w-full
         border-b
         p-2
         '
        href={'/login'}
        > {login}
        </Link>
    </div>

    ) : ''
    }
    </>
  )
}

export default Register