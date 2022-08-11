import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
    filterVal: FilterType
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

    const setClassName = (filterVal: FilterType) => {
     return `${styles.button} ${filterVal === props.filterVal ? styles.active : ""}`
    }

    return (
        <div className={styles.wrapper}>

            {mappedAffairs}

            <button className={setClassName("all")} onClick={setFilter("all")}>All</button>
            <button className={setClassName("high")} onClick={setFilter("high")}>High</button>
            <button className={setClassName("middle")} onClick={setFilter("middle")}>Middle</button>
            <button className={setClassName("low")} onClick={setFilter("low")}>Low</button>
        </div>
    )
}

export default Affairs
