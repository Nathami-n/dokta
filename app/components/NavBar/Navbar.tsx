import { SearchBar, UserMenu } from ".."

const Navbar = () => {
  return (
    <div className="
    border-b
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
            rounded-full
            w-18
            h-18
            p-4
            cursor-pointer
            hover:bg-rose-500
            transition
            bg-blue-500
            text-white
            ">
             Dokta
                
            </div>
            <SearchBar/>
            <UserMenu/>
        </div>
    </div>
  )
}

export default Navbar