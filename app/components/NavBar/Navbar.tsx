import { SearchBar, UserMenu } from ".."

const Navbar = () => {
  return (
    <div className="
    border-b
    shadow-b
    p-3
    md:p-5
    ">
        <div className="
        max-w-6xl
        mx-auto
        flex
        justify-between
        items-center
        
        ">
            <div className="
            cursor-pointer
            ">
             <h1
             className="
             text-3xl
             font-bold
             text-blue-500
              hover:text-red-500
              transition
             "
             >Dokta 
             <span className="
             font-extrabold
             text-rose-600
             text-4xl
             ">
              .
              </span>
              </h1>
                
            </div>
            <SearchBar/>
            <UserMenu/>
        </div>
    </div>
  )
}

export default Navbar