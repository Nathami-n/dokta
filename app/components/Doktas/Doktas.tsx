
import { Dokta } from "..";

interface iDoktaProps {
    doctors: {
    name: string |null;
    image: string | null;
    description: string | null;
    charges: number | null;
    location: string | null;
    speciality: string | null;
    id: string | null;
    }[]
}
const Doktas: React.FC<iDoktaProps> =  async ({
    doctors
}) => {
    return(
        <div 
        className="
        border
        p-3
        max-md:mt-4
        rounded-lg
        md:mt-5
        md:w-full
        lg:grid-cols-2
        "
        >
            <h2 className="font-bold text-xl text-center">More Services!</h2>

            <div 
            className="
            mx-auto
            "
            >
                {doctors?.map(doctor=> {
                    return(
                        <Dokta
                         key={doctor?.id} 
                        doctor={doctor}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Doktas