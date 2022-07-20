import React, {FC} from 'react'
import {MessageDataType} from "./HW1";

import styles from "./Message.module.css"


export const Message: FC<MessageDataType> = (props) => {
    return (
        <div className={styles.message}>
            <img className={styles.avatar} src={props.avatar}/>
            <div className={styles.messageContent}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.messageText}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>

    )
}

export default Message
