import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {

    const [user, setUser] = useState<any>({})
    const { onLogin, onLogout } = useContext(AuthContext)
    const [error, setError] = useState<Number | null>(null)
    const loginUser = async (formData: any) => {

        const resp = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (!resp.ok) {
            setError(resp.status)
            return null;
        }

        const { token, ...data } = await resp.json()
        localStorage.setItem('token', token)

        onLogin()
        setUser(data)
    }

    const logoutUser = () => {
        setUser({})
        onLogout()
    }


    return {
        user,
        error,
        loginUser,
        logoutUser
    }
}