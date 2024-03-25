'use client'
import { useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Link from 'next/link'
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { createUser } from '@/app/actions/userActions'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const value = await createUser(data);
      if (!value) {
        toast.error('Error!');
        return
      }
     if(value) {
      toast.success('User created successfully');
      // router.push('/signIn')
     }//navigate the user to the login page once successful

    } catch (error) {
      throw new Error(
        'error creating user'
      );
    }
  }

  return (
    <section
      className="
    h-screen
    flex
    flex-col
    justify-center
    items-center
    gap-3
    "
    >
      <h1 className='
      text-4xl
      text-blue-500
      font-bold
      text-center
      mb-5
      '>Register Now</h1>
      <form
        className='
      p-4
      border
      rounded-lg
      md:w-3/5
      w-[80%]
      max-w-[500px]
      h-auto
      shadow-md
      flex
      flex-col
      gap-5
      '
        onSubmit={handleSubmit(onSubmit)}>
        <div className='
       flex
       flex-col
       gap-2
       '>
          <label
            htmlFor="username"
            className='
         text-bold
         text-xl
         text-blue-500
         '
          >Username</label>
          <input
            className='
        outline-none
        p-4
        border
        rounded-md
        w-full
        focus:border-green-300
        '
            type='text'
            id='username'
            {...register('username')}
          />
        </div>
        <div
          className='
         flex
         flex-col
         gap-2
         '
        >
          <label
            className='
         text-bold
         text-xl
         text-blue-500
         '
            htmlFor='email' >Email</label>
          <input
            type='email'
            id='email'
            {...register('email')}
            className='
       outline-none
       p-4
       border
       rounded-md
       w-full
       focus:border-green-300
       '

          />
        </div>
        <div className='
       flex
       flex-col
       gap-2
       relative
       '>
          <label
            htmlFor='password'
            className='
         text-bold
         text-xl
         text-blue-500
         '
          >Password</label>
          <input
            className='
        outline-none
        relative
        p-4
        border
        rounded-md
        w-full
        focus:border-green-300
        '
            type={`${isOpen ? 'text' : 'password'}`}
            {...register('password')}
          />
          <div
            onClick={() => setIsOpen((prev) => (!prev))}
            className='
          absolute
          right-3
          top-12
          '>
            {isOpen ?
              <RxEyeOpen
                size={30}
                className='
            cursor-pointer
            text-blue-500

            '
              /> :
              <RxEyeClosed
                size={30}
                className='
              cursor-pointer
              text-rose-500

              '
              />
            }
          </div>
        </div>

        <button className='
      w-full
      border
      rounded-md
      bg-blue-500
      text-white
      hover:bg-rose-500
      transition
      p-3
      '>
          Continue
        </button>
        <button 
        onClick={(e)=> {
          e.stopPropagation()
          signIn('google', {callbackUrl: 'http:localhost:3000/'})
        }}
        type='button'
        className='
        w-full
        border
        rounded-md
        flex
        items-center
        transition
        gap-12
        p-3
      '>
          <Image
          className='
        ml-8
          '
          src={'/google.svg'}
          width={20}
          height={20}
          alt='google icon'
          />
          <h1>
          Or Continue with Google
        </h1>
        </button>
        <div
          className=''
        >
          Already have an account?
          <Link href={'/signIn'}>
            <span className='text-rose-500 hover:underline ml-1 font-bold'>Login now</span>
          </Link>
        </div>
      </form>

    </section>
  )
}

export default SignUp