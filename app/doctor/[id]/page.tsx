import client from '@/app/utils/prismaClient'
import Image from 'next/image'
import { useCountries } from '@/app/utils/useCountries'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import { DollarSignIcon, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react'
import { Doktas, BookDoctor } from '@/app/components'
const DetailPage = async ({
    params
}: {
    params: {
        id: string
    }
}) => {
    const doctors = await client.doctor.findMany({
        where:{
            complete: true,
        },
        select:{
            name: true,
            image: true,
            description: true,
            charges: true,
            location: true,
            speciality: true,
            id: true
        }
    })
    const { getCountryByValue } = useCountries();
    const doctor = await client.doctor.findUnique({
        where: {
            id: params.id as string,
        }
    })
    const country = getCountryByValue(doctor?.location as string);
    // const LazyMap = dynamic(() => import('@/app/components/map/Map'), {
    //     ssr: false,
    //     loading: () => <Skeleton className='h-[50vh] w-full' />
    // })
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
        lg:grid-cols-2
        md:gap-x-3
        '
        >
                {/* Details */}
                <div>
                <div
         className='
         grid
         grid-cols-1
         md:grid-cols-2
         col-span-3
         border
         p-5
         mt-5
         rounded-lg
         '
        >
          {/* image */}
            <div className='relative h-72 p-20 md:col-span-2'>
             <Image
             src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/${doctor?.image}`}
             layout='fill'
             alt={doctor?.name as string}
             className='
                     rounded-lg
                    object-cover
                     w-full
                     '
                        />
                    </div>
                    {/* info */}
                    <div
                        className='
            flex
            flex-col
            gap-2
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
                            <MapPin />
                            <span>{country?.flag}/{country?.region} {country?.label}</span>
                        </h2>
                        <h2
                            className='
                 text-md
                 flex
                 gap-2
                 text-gray-500
                 '
                        >
                            <MailIcon />
                            <span>{doctor?.mail}</span>
                        </h2>
                        <h2
                            className='
                text-md
                flex
                gap-2
                text-gray-500
                '
                        >
                            <PhoneCallIcon />
                            <span>{doctor?.phone}</span>
                        </h2>
                        <h2
                            className='
                text-md
                flex
                gap-2
                text-gray-500
                '
                        >
                            <DollarSignIcon className='text-rose-500' />
                            <span>{doctor?.charges}/session</span>
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
                     <BookDoctor/>
                    </div>
                </div>
                <div
                className='
                border
                p-3 
                rounded-lg
                w-full
                md:col-span-3
                md:p-6
                mt-6
                ' 
                >
                    <h2
                        className='
                            font-bold
                            text-[20px]
                            '>
                        About me
                    </h2>
                    <p className='
                        text-gray-500
                        tracking-wide
                        mt-2
                        '>{doctor?.description}</p>
                </div>
                </div>
                {/* suggestions */}
               <Doktas doctors={doctors}/>
            </div>
        </div>
    )
}

export default DetailPage