import { ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

export const PublicRoutes = ({ children }: { children: ReactNode }) => {
    const { isLogged } = useContext(AuthContext)
    return (
        isLogged
            ? <Navigate to={'/home'} />
            : children
    )
}
