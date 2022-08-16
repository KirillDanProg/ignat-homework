import React from 'react'
import Message from "./Message";
import styles from "../../p1-main/m1-ui/u1-app/App.module.css"

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text hey everyone my name is Kirill bla bla qwerty',
    time: '22:00',
}
function HW1() {

    return (
        <div >
            <hr/>
           <div className={styles.title}>homeworks 1</div>
            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
        <hr/>
        </div>
    )
}

export default HW1
