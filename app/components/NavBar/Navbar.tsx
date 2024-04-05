'use client'
import { Session } from "next-auth"
import { SearchBar, UserMenu, FilterLogos } from ".."
import Link from 'next/link'
import { useEffect } from "react"

interface iNavBarProps {
  session: Session | null
}
const Navbar: React.FC<iNavBarProps> =  ({
  session
}) => {
 
//  useEffect(()=>{

//   if(session?.user) {
//     window.location.reload();
//   }
//  }, [session])

  return (
    <div className="
    border-b
    shadow-md
    p-3
    md:p-5
    relative
    ">
        <div className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        max-sm:gap-3
        ">
            <div className="
            cursor-pointer
            ">
             <Link href='/'
             className="
             text-3xl
             font-bold
             text-blue-500
              hover:text-red-500
              transition
              max-sm:hidden
             "
             >Dokta 
             <span className="
             font-extrabold
             text-rose-600
             text-4xl
             ">
              .
              </span>
              </Link>
             <Link href='/'
             className="
             text-3xl
             font-bold
             text-blue-500
              hover:text-red-500
              transition
              sm:hidden
             "
             >D 
             <span className="
             font-extrabold
             text-rose-600
             text-4xl
             ">
              .
              </span>
              </Link>
                
            </div>
            <SearchBar/>
            <UserMenu
            session={session}
            />

        </div>
        <FilterLogos/>
    </div>
  )
}

export default Navbar