import { types } from "./types"

interface State {
    email: string,
    password: string
}

interface Actions {
    type: string,
    payload: any
}

export const formReducer = (state: State, actions: Actions) => {
    const { type, payload } = actions

    switch (type) {
        case types.form:
            return {
                ...state,
                [payload.name]: payload.value
            }

        default:
            return state
    }
}