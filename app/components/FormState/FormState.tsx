'use client'
import { useFormStatus } from "react-dom"
const FormState = () => {
    const {pending} = useFormStatus()
  return (
    <>
    <button 
        disabled={pending}
        className={`
          bg-blue-500
          hover:bg-rose-500
          transtion-colors
          text-white
           p-2
           rounded-lg
           w-[100px]
          `
             }
          >
            {
                pending ? 'Wait...' : "Next"
            }
          </button>
    </>
  )
}

export default FormState