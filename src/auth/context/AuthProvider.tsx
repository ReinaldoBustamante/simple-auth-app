
import { ReactNode, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'



export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLogged, setisLogged] = useState(false)

    const validateToken = async (token: string) => {
        try {
            const response = await fetch(`http://localhost:3000/api/auth/validate/${token}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setisLogged(true);
            } else {
                onLogout();
            }
        } catch (error) {
            console.error('Error validando el token:', error);
            onLogout();
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            validateToken(token);
        }
    }, []);

    const onLogin = () => {
        setisLogged(true)
    }

    const onLogout = () => {
        localStorage.removeItem('token')
        setisLogged(false)
    }



    return (
        <AuthContext.Provider value={{
            isLogged,
            onLogin,
            onLogout

        }}>
            {children}
        </AuthContext.Provider>
    )
}
