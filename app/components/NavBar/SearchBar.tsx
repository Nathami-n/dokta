'use client'
import {CiSearch} from 'react-icons/ci'
interface SearchBarProps {

}

const SearchBar = () => {
  return (
    <div className='
    
    '>
   <form
    action=""
    className="
    border
    hover:shadow-md
    transition
    cursor-pointer
    rounded-xl
    p-1
    relative
    w-[200px]
    "
   >
    <input 
    type="text"
    className="
    outline-none
    p-3
    w-full
    "
    placeholder="search..."
     />
     <CiSearch 
     type='submit'
     className="
     bg-blue-500
     text-white
     rounded-full
     transition
     hover:bg-rose-500
     cursor-pointer
     p-1
     absolute
     top-2
     right-3
      "
     size={35}
     />
   </form>
   </div>
  )
}

export default SearchBar