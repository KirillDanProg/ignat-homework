import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.box}>
            <div className={styles.name}>{props.affair.name}</div>
            <button onClick={deleteCallback}>x</button>
            <div className={`${styles.prior}  ${props.affair.priority === "low" ? styles.low :
                props.affair.priority === "middle" ? styles.middle :
                    styles.high}`}>{props.affair.priority}
            </div>
        </div>
    )
}

export default Affair
