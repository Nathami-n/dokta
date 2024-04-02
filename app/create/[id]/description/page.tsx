import { createDoctorDescription } from "@/app/actions/userActions"
import { ButtonBar } from "@/app/components"
import toast from "react-hot-toast";

interface DescriptionProps {
  params: {
    id: string;
  }
}
const Description: React.FC<DescriptionProps> = ({
  params
}) => {
 
  
  return (
    <>
    <form 
    action={createDoctorDescription}
    >
      <input
      type="hidden"
      value={params.id}
      name='docId'
      />
    <div 
    className="
    max-w-7xl
    mx-auto
    h-screen
    p-1
    mb-[400px]
    "
    >
      <h1
      className="
      text-3xl
      font-semibold
      text-center
      tracking-tight
      mt-8
      "
      >Describe your Services!
      </h1>
      <div className="
      w-3/5
      mx-auto
      mt-4
      flex
      flex-col
      gap-4
      ">
        <div className="
        flex
        flex-col
        justify-center
        gap-y-2
        ">
          <label htmlFor="name">
            Name
          </label>
          <input 
          type="text"
          name="name"
          className="
          outline-none
          border
          rounded-sm
          p-2
          focus:border-green-500
          "
          placeholder="name..."
          />
        </div>
        <div 
        className="
        flex
        flex-col
        justify-center
        gap-y-2
        "
        >
          <label 
          htmlFor="phone"
          >
            Phone
          </label>
          <input 
          type='text'
          placeholder="number"
          name="phone"
          id="phone"
          className="
          outline-none
          border
          rounded-sm
          p-2
          focus:border-green-500
          "
          />
        </div>
        <div 
        className="
        flex
        flex-col
        justify-center
        gap-y-2
        "
        >
          <label 
          htmlFor="email"
          >
            Email
          </label>
          <input 
          type='email'
          placeholder="email"
          name="email"
          id="email"
          className="
          outline-none
          border
          rounded-sm
          p-2
          focus:border-green-500
          "
          />
        </div>
        <div className="
        flex
        flex-col
        justify-center
        gap-y-2
        ">
          <label htmlFor="description">
          Description
          </label>
          <textarea
          name="description"
          className="
          outline-none
          border
          rounded-sm
          p-2
          focus:border-green-500
          "
          placeholder="describe your work"
          />
        </div>
        <div 
        className="
        flex
        flex-col
        justify-center
        gap-y-2
        "
        >
          <label htmlFor="charges">
            Charges
          </label>
        <input
        type='number'
        id='number'
        name='number'
        min='1000'
        placeholder="in $"
        className="
        outline-none
        border
        rounded-sm
        p-2
        focus:border-green-500
        "
        />
        </div>
        <div
        className="
        flex
        flex-col
        justify-center
        gap-y-2
        "
        >
          <label htmlFor="
          image
          ">Image</label>

          <input
          type='file'
          id='image'
          name='image'
          accept="image/*"
          className="
          p-2
          cursor-pointer
          "
          />
        </div>
        <div 
          className="
          flex
          flex-col
          justify-center
          gap-y-2
          " 
        >
          <label htmlFor="start">Start_time:</label>
          <input 
          type="time"
          name="start"
          id="start"
          required
          className="
          outline-none
          border
          hover:border-green-500
          p-2
          "
           />
        </div>
        <div 
          className="
          flex
          flex-col
          justify-center
          gap-y-2
          " 
        >
          <label htmlFor="end">End_time:</label>
          <input 
          type="time"
            id="end"
            name='end'
          required
          className="
          outline-none
          border
          hover:border-green-500
          p-2
          "
           />
        </div>
      </div>
      <ButtonBar/>
    </div>
    </form>
    </>
  )
}

export default Description