import client from '@/app/utils/prismaClient'
import Image from 'next/image'
import { useCountries } from '@/app/utils/useCountries'
const DetailPage = async ({
    params
}:{params:{
    id: string
}}) => {
    const {getCountryByValue} = useCountries();
    const doctor = await client.doctor.findUnique({
        where:{
            id: params.id as string,
        }
    })
    const country = getCountryByValue(doctor?.location as string);
    return (
        <div className='
        p-2
        mt-2
        w-[90%]
        mx-auto
        '>
            <div
            className='
            flex
            flex-col
            items-center
            justify-center
           
            '
            >
                
            <h1 
            className="
            text-3xl
            font-bold
            mb-3
            "
            >
                This is {doctor?.name}
            </h1>
            <div 
            className="
            relative 
            "
            >
                <Image 
                src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/${doctor?.image}`}
                layout='intrinsic'
                alt={`image of ${doctor?.name}`}
                className='
                rounded-lg
                '
                width={500}
                height={300}
                />
            </div>
            <p 
            className='
            font-bold
            '
            >{country?.flag}/{country?.region} {country?.label}</p>
            <p className='font-semibold mb-1'>Speciality: <span className='font-bold text-rose-500'>{doctor?.speciality}</span></p>
            <p className='font-semibold mb-1'> Charges: <span className='font-extrabold'>{doctor?.charges}/hour</span></p>
            <p className='border rounded-lg p-2 max-w-[750px]'>{doctor?.description}</p>
            </div>
        </div>
    )
}

export default DetailPage