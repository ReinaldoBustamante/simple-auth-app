import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

export const Form = () => {


    const { state: formData, inputChange } = useForm();
    const { loginUser, error } = useAuth();

    const login = (e: FormEvent) => {
        e.preventDefault()
        loginUser(formData)
    }

    return (
        <form onSubmit={(e) => login(e)}>
            <label htmlFor='email'> Email </label>
            <div className="input">
                <input
                    type="text"
                    id='email'
                    name="email"
                    onChange={(e) => inputChange(e.target.name, e.target.value)} className={`${(error === 404 || (error === 400 && formData.email === '')) && 'border-error'}`}
                    placeholder="email@gmail.com"
                />
                {
                    error === 404 && <p className="error">user not found</p>
                }
            </div>
            <label htmlFor="password"> Password </label>
            <div className="input">
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => inputChange(e.target.name, e.target.value)} className={`${(error === 401 || (error === 400 && formData.password === '')) && 'border-error'}`}
                    placeholder="*******"
                />
                {
                    error === 401 && <p className="error">Invalid password</p>
                }
            </div>
            <button type="submit">Iniciar Sesion</button>
            {
                error === 400 && <p className="error">Ingrese todos los campos</p>
            }
        </form>
    )
}
