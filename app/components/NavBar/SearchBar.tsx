'use client'
import {CiSearch} from 'react-icons/ci'
import {updateSearch} from '@/app/actions/userActions'
import {useState} from 'react'
import {usePathname, useRouter} from 'next/navigation'


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  
  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault();
    const newLetter = query.trim().split('')[0].toUpperCase();
    console.log(newLetter)
    const newQuery = query.trim().split('').splice(0, 1, newLetter ).join('');
    console.log(newQuery)
    const url = `${pathname}/?filter=${newQuery}`;
    router.push(url);
  }
  return (
    <div className='
    max-sm:w-auto
    '>
   <form
    onSubmit={handleSearch}
    className="
    border
    hover:shadow-md
    transition
    cursor-pointer
    rounded-xl
    p-1
    relative
    w-[200px]
    max-sm:w-auto
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
    name="search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
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