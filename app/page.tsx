import { fetchService } from "./utils/FetchData";
import { Card } from "./components";
import CardSkeleton from "./components/CardSkeleton";
import { Suspense } from "react";
const Home =  async ({
  searchParams
}:{
  searchParams?: {
    filter?:string 
  }
}) => {
  return (
    <div className="
    mt-6
    p-4
    grid
    gap-4
    lg:grid-cols-4
    md:grid-cols-3
    sm:grid-cols-2
    overflow-x-hidden
    ">
      
      <Suspense key={searchParams?.filter} fallback={<LoadingSkeleton/>}>
      <DisplayItems searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}
export default Home

const DisplayItems = async ({
  searchParams
}: {searchParams?:{filter?:string}}) => {
  const doctors = await fetchService(searchParams);
  return (
    <>
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
    </>
  )
}

const LoadingSkeleton = () => {
return(
  <div className="
  w-screen
  ">
      <div  className="
      mt-6
      p-4
      grid
      gap-4
      max-w-7xl
      lg:grid-cols-4
      md:grid-cols-3
      sm:grid-cols-2
      mx-auto
      ">
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      </div>
  </div>
)
}