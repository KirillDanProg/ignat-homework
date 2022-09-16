import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === "up" ? [...state.sort((a, b) => a.name > b.name ? 1 : -1)] :
                [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
        }
        case 'check': {
            // need to fix
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}

type ActionsType = {type: 'sort', payload: 'up'} | {type: 'sort', payload: 'down'} | {type: 'check', payload: 18}