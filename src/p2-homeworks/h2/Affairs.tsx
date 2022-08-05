import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (val: FilterType) => {
       return () => props.setFilter(val)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setFilter("all")}>All</button>
            <button onClick={setFilter("high")}>High</button>
            <button onClick={setFilter("middle")}>Middle</button>
            <button onClick={setFilter("low")}>Low</button>
        </div>
    )
}

export default Affairs
