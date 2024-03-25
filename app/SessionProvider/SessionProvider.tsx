'use client'
import { SessionProvider } from "next-auth/react"

const UserSessionProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default UserSessionProvider