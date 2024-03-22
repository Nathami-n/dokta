'use client'
import { useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Link from 'next/link'

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => { }

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
        p-3
        border
        rounded-md
        w-full
        '
            placeholder='
        username...
        '
            type='text'
            id='username'
            {...register('username')}
          />
        </div>
        <div>
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
       p-3
       border
       rounded-md
       w-full
       '

          />
        </div>
        <div className='
       flex
       flex-col
       gap-2
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
        p-3
        border
        rounded-md
        w-full
        '
            type={`${isOpen ? 'password' : 'text'}`}
          />
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
        <div
          className=''
        >
          Already have an account?
          <Link href={'/login'}>
            <span className='text-rose-500 hover:underline ml-1 font-bold'>Login now</span>
          </Link>
        </div>
      </form>

    </section>
  )
}

export default SignUp