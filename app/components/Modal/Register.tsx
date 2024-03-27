
import useLoginStore from '@/app/zustand/RegisterStore'
import type { Session } from 'next-auth'
import Link from 'next/link'
interface RegisterModalProps {
    login?: string
    signup?:string
    logout?:string
    createListing?:string
    session: Session | null
}

const Register: React.FC<RegisterModalProps> = ({
    login,
    signup,
    logout,
    session,
    createListing

}) => {

    const open = useLoginStore((state)=> state.open)
    const close = useLoginStore((state) => state.onClose)
  return (
    <>
    {open && session === null ? (
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

    ) : open && session !== null ? (
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
            <h1
            className='
            
            '
            > Welcome 
            {session.user?.name}
            </h1>
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
        >
             {logout}
        </Link>
        </div>

    ): ""
    }
    </>
  )
}

export default Register