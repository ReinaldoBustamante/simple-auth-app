import { useReducer } from "react"
import { formReducer } from "../reducers/formReducer"
import { types } from "../reducers/types"


export const useForm = () => {

    const [state, dispatch] = useReducer(formReducer, {
        email: '',
        password: ''
    })

    const inputChange = (name: string, value: string) => {
        dispatch({
            type: types.form,
            payload: {
                name,
                value
            }
        })
    }

    return {
        state,
        inputChange
    }
}
