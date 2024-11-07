import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { PrivateRoutes } from "./PrivateRoutes"
import { Home } from "../simpleAuth/pages/Home"
import { PublicRoutes } from "./PublicRoutes"



export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={
                <PublicRoutes>
                    <Login />
                </PublicRoutes>
            } />
            <Route path="/*" element={
                <PrivateRoutes>
                    <Home />
                </PrivateRoutes>
            } />
        </Routes>

    )
}