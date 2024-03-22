import { ReactNode } from "react"

interface RootServiceProps {
    children: ReactNode
}
 const RootService = ({children}: RootServiceProps) => {
    return(
        <div>
            {children}
        </div>
    )

}

export default RootService