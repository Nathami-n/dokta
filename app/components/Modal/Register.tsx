
import useLoginStore from '@/app/zustand/RegisterStore'
import type { Session } from 'next-auth'
import Link from 'next/link'
import {CreateService} from '@/app/actions/userActions'
import {FieldValues,useForm, SubmitHandler} from 'react-hook-form'
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
    const close = useLoginStore((state) => state.onClose);
    const {register, handleSubmit} = useForm<FieldValues>();

    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
      try {
        const response = await  CreateService(data);
        console.log(response);

      } catch(error) {
        console.error(error);
      }

    }
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
        href={'/signIn'}
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
            text-center
            '
            > 
           <span className='
           mr-1
           '>Welcome</span>
             <span className='
             text-blue-500
             text-xl
             '>
             {session.user?.name}!
             </span>
            </h1>
            <div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            >
                <input className ="
                hidden
                "
                id='email'
                {...register(`email`)}
                value={`${session.user?.email as string}`}
                />
             <button
             type='submit'
     
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
        >
             {createListing}
        </button>
            </form>
            </div>
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