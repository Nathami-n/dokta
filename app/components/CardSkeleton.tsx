import { Skeleton } from "@/components/ui/skeleton"


const CardSkeleton = () => {
  return (
    <div
    className="
    flex
    flex-col
    h-72
    w-full
    "
    >
      
            <Skeleton
            className="
            h-full
            w-full
            "
            />
            <div 
            className="
            space-y-4
            flex
            flex-col
            "
            >
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-3/4"/>
                <Skeleton className="h-4 w-1/2"/>
                <Skeleton className="h-4 w-1/4"/>
            </div>
        
    </div>
  )
}

export default CardSkeleton