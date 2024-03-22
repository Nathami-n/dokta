
import Link from 'next/link'
interface RegisterModalProps {
    login?: string
    signup?:string
    logout?:string
    open:boolean
}

const Register: React.FC<RegisterModalProps> = ({
    login,
    signup,
    logout,
    open
}) => {
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
    
    "
    >
        <Link 
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