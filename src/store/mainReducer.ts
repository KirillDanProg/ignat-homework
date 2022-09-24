type MainStateType = {
    isLoading: boolean
}
const SET_IS_LOADING = "SET-IS-LOADING"
type ActionsType = setLoadingACType
const initialState = {
    isLoading: false
}
export const mainReducer = (state: MainStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}
type setLoadingACType = ReturnType<typeof setLoadingAC>
export const setLoadingAC = () => {
    return {
        type: SET_IS_LOADING
    } as const
}