import client from '@/app/utils/prismaClient'
import Image from 'next/image'
import { useCountries } from '@/app/utils/useCountries'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    const LazyMap = dynamic(()=> import('@/app/components/map/Map'), {
        ssr: false,
        loading: ()=> <Skeleton className='h-[50vh] w-full'/>
      })
    return (
        <div className='
        p-5
        md:px-20
        '>
        <h2 className='font-bold text-3xl mb-2'>Know your doctor</h2>

        <div
        className='
        grid
        grid-cols-1
        md:grid-cols-4
        ' 
        >
            {/* Details */}
         <div
         className='
         grid
         grid-cols-1
         md:grid-cols-3
         col-span-3
         border
         p-5
         mt-5
         rounded-lg
         ' 
         >
            {/* image */}
            <div className='relative h-72 p-20'>
            <Image
            src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/${doctor?.image}`}
            layout='fill'
            alt={doctor?.name as string}
            className='
            rounded-lg
            object-cover
            w-full
            h-full
            '
             />
            </div>
            {/* info */}
            <div 
            className='
            col-span-2
            flex
            flex-col
            gap-1
            md:ml-12
            items-baseline
            '
            >
                <h2 
                className='
                font-bold
                text-2xl
                mt-5
                '
                >{doctor?.name}
                </h2>
                <h2
                className='
                text-md
                flex
                gap-2
                text-gray-500
                ' 
                >
                    <MapPin/>
                    <span>{country?.flag}/{country?.region} {country?.label}</span>
                </h2>
                <h2
                className="
                text-[12px]
                bg-blue-100
                p-2
                text-blue-600
                font-bold
                rounded-full
                "
                >
                    {doctor?.speciality}
                </h2>
                <Button
                className='
                rounded-full
                mt-1
                bg-blue-500
                '
                >
                    Book appointment
                </Button>
            </div>
         </div>
         {/* suggestions */}
         <div>

         </div>
        </div>
        </div>
    )
}

export default DetailPage