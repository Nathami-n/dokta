import Image from 'next/image'
import {redirectUserToDoctor} from '@/app/actions/userActions'
interface iDoktaProps {
    doctor: {
    name: string | null ;
    image: string | null ;
    description: string | null;
    charges: number | null;
    location: string | null;
    speciality: string | null;
    id: string | null;
    }
}
const DoktaCard: React.FC<iDoktaProps> = ({
    doctor
}) => {
    return (
        <form
        action={redirectUserToDoctor}
        >
            <input type="hidden" name="id" value={doctor.id as string}/>
            <div
        className='
        bg-gray-400/10
        hover:bg-blue-300/30
        border
        p-4
        rounded-lg
        flex
        flex-col
        items-center
        mb-3
        '
        >
        <div>
            <Image
            src={`https://dqojewzndgnvyzhhkjym.supabase.co/storage/v1/object/public/Dokta/${doctor?.image}`}
            alt='doctor Image'
            width={100}
            height={100}
            className='
            rounded-lg
            '
            />
        </div>
        <div className='
        flex
        flex-col
        items-center
        '>
            <h1>{doctor?.name}</h1>
            <h2
               className="
                text-blue-600
                bg-blue-100
                rounded-lg
                p-2
                "
                >
               {doctor?.speciality}
                </h2>
        </div>
        <button
        className="
        rounded-lg
        p-2
        bg-rose-500
        text-white
        w-full
        mt-2
        col-span-2
        "
        >Explore</button>
        </div>
        
        </form>
    )
}

export default DoktaCard