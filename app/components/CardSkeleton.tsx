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
        
    </div>
  )
}

export default CardSkeleton