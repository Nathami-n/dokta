import { useCountries } from "@/app/utils/useCountries"
import Image from 'next/image'
import Link from 'next/link'
interface iCardProps {
    name: string;
    image: string;
    description: string;
    charges: number;
    location: string;
}
const Card: React.FC<iCardProps> = ({
    name,
    image,
    description,
    charges,
    location

    }) => {
    const {getCountryByValue} = useCountries();
    const country = getCountryByValue(location);
    console.log(image)
  return (
    <div className="
    flex
    flex-col
    ">
        {/* image */}
        <div className="
        h-72
        relative
        ">
            <Image
            src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/cardio.jpg-2024-04-02T05:58:23.589Z`}
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
       <Link href={'/'}>
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
        <p>ksh <span className="font-medium text-black">{charges}</span>/session</p>
       </Link>

    </div>
  )
}

export default Card