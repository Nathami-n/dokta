
interface iDoktaProps {
    doctor: {
    name: string ;
    image: string ;
    description: string;
    charges: number;
    location: string;
    speciality: string;
    id: string;
    }
}
const DoktaCard: React.FC<iDoktaProps> = ({
    doctor
}) => {
    return (
        <div
        className='
        bg-gray-400
        hover:bg-blue-300/50
        border
        p-2
        rounded-lg
        '
        >

        </div>
    )
}

export default DoktaCard