'use client'
import { RxHamburgerMenu } from "react-icons/rx"
import Image from 'next/image'
import Register from '@/app/components/Modal/Register'
import useLoginStore from '@/app/zustand/RegisterStore'
interface UserMenuProps {
avatarUrl?: string
}
const UserMenu: React.FC<UserMenuProps>= ({
  avatarUrl
}
) => {
  const openOrCloseModal = useLoginStore((state)=> state.onClose)


  return (
    <div className="
    flex
    items-center
    border
    gap-x-1
    rounded-full 
    p-1
    overflow-hidden
    cursor-pointer
    hover:shadow-md
    transition
    ">
      <RxHamburgerMenu 
      onClick={openOrCloseModal}
      size={30}
      className="
      transition
      text-gray-600
      cursor-pointer
      max-sm:w-[40px]
      max-sm:h-[40px]
      "
      />
      <Image 
      onClick={openOrCloseModal}
      src={`${avatarUrl ? avatarUrl : 'https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg'}`}
      alt='user Image'
      width={48}
      height={48}
      className="
      hidden
      sm:block
      "
      />
    <Register
    login='login'
    signup='signup'
    />
    </div>
  )
}

export default UserMenu