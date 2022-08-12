import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    focus: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, focus} // деструктуризация пропсов
) => {


    const inputClass = name ? "" : s.error // need to fix with (?:)

    return (
        <div className={s.box}>
            <SuperInputText value={name} onChange={setNameCallback}
                            className={`${s.input} ${focus ? inputClass : ""}`}/>
            <SuperButton className={s.button}
                         onClick={addUser}>add</SuperButton>
            <span className={s.usersTotal}>{totalUsers}</span>
            <div className={s.errorMessage}>{error && error}</div>
        </div>
    )
}

export default Greeting
