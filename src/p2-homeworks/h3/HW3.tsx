import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import styles from "./../../p1-main/m1-ui/u1-app/App.module.css"

// types
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {name, _id: users.length + 1}
        users.push(newUser)
        setUsers(users) // need to fix
    }

    return (
        <div>
            <div className={styles.title}>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
