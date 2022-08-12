import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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

            <SuperButton onClick={setFilter("all")}
                         className={setClassName("all")}>All</SuperButton>
            <SuperButton onClick={setFilter("high")}
                         className={setClassName("high")}>High</SuperButton>
            <SuperButton onClick={setFilter("middle")}
                         className={setClassName("middle")}>Middle</SuperButton>
            <SuperButton onClick={setFilter("low")}
                         className={setClassName("low")}>Low</SuperButton>
        </div>
    )
}

export default Affairs
