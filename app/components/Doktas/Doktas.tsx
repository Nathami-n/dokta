import { allData } from "@/app/utils/FetchData"
import { Dokta } from "..";

interface iDoktaProps {
    doctors: {
    name: string ;
    image: string ;
    description: string;
    charges: number;
    location: string;
    speciality: string;
    id: string;
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
        "
        >
            <h2 className="font-bold text-xl text-center">More Services!</h2>

            <div>
                {doctors?.map(doctor=> {
                    return(
                        <Dokta key={doctor?.id} doctor={doctor}/>
                    )
                })}
            </div>

        </div>
    )
}

export default Doktas