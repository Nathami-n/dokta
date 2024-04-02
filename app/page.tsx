import { fetchService } from "./utils/FetchData";
import { Card } from "./components";
const Home =  async () => {
  const doctors = await fetchService();
  return (
    <div className="
    mt-6
    p-4
    grid
    lg:grid-cols-4
    md:grid-cols-3
    sm:grid-cols-2
    ">
      {doctors.map((doctor)=> {
        return (
          <Card
          name={doctor.name as string}
          image={doctor.image as string}
          description={doctor.description as string}
          charges={doctor.charges as number}
          location={doctor.location as string} 
          />
        )
      })}
    </div>
  )
}

export default Home