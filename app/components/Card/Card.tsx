import { useCountries } from "@/app/utils/useCountries"
import Image from 'next/image'
import Link from 'next/link'
interface iCardProps {
    name: string;
    image: string;
    description: string;
    charges: number;
    location: string;
    id: string;
}
const Card: React.FC<iCardProps> = ({
    name,
    image,
    description,
    charges,
    location,
    id

    }) => {
    const {getCountryByValue} = useCountries();
    const country = getCountryByValue(location);
   
  return (
    <div className="
    flex
    flex-col
    ">
        <Link href={`/home/${id}`}>
        {/* image */}
        <div className="
        h-72
        relative
        ">
            <Image
            src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/${image}`}
            alt="doctor Image"
            className="
            h-full
            object-cover
            rounded-md
            "
            fill
            // height={100}
            // width={100}
            />
        </div>
       <h1 className="
       flex
       items-center
       gap-3
       ">
        <span>{name}</span>
        <Image src={'https://cdn-icons-png.flaticon.com/512/6364/6364343.png'} 
       width={100} 
       height={100} 
       alt="verified"
       className="
       w-4
       h-4
       "
       />
       </h1>
        <h3
        className="font-medium text-base"
        >{country?.flag} {country?.label} / {country?.region}</h3>
        <p 
        className="
        text-sm
        line-clamp-2
        "
        >
            {description}
        </p>
        <p>$ <span className="font-medium text-black">{charges}</span>/session</p>
       </Link>

    </div>
  )
}

export default Card