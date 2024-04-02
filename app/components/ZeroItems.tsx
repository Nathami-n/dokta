import { BiError } from "react-icons/bi"

const ZeroItems = () => {
    return (
        <div
            className="
        flex
        min-h-[400px]
        lg:col-span-4
        md:col-span-3
        sm:col-span-2
        flex-col
        items-center
        justify-center
        rounded-md
        border
        border-dashed
        p-8 
        text-center
        animate-in
        fade-in-50
        "
        >
            <div
             className="
             w-24
             h-24
             p-4
             rounded-full
             bg-rose-500/20
             flex
             items-center
             justify-center
             "
            >
            <BiError className=" text-red-600 text-4xl"/>
            </div>
            <h1
            className="
            font-bold
            tracking-tight
            mt-2

            " 
            >Oops! Seems like there are no services here</h1>
            <p 
            className="
            text-gray-500
            ">Create one if you are a licenced doctor!</p>
        </div>
    )
}

export default ZeroItems