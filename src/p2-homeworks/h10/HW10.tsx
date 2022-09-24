import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {canUseDOM} from "react-redux/es/utils/useIsomorphicLayoutEffect";
import {setLoadingAC} from "../../store/mainReducer";
import {RootType} from "../../store/store";

function HW10() {

    const loading = useSelector<RootType, boolean>(state => state.main.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(setLoadingAC())

        setTimeout(() => {
            dispatch(setLoadingAC())
        }, 1000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
