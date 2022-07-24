import React, {FC} from 'react'

import styles from "./Message.module.css"

import {MessageDataType} from "../../p1-main/m1-ui/u1-app/App";

export const Message: FC<MessageDataType> = (props) => {
    return (
        <>
            <div className={styles.message}>
                <img className={styles.avatar} src={props.avatar} alt={"avatar"}/>
                <div className={styles.messageContent}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.messageText}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </>
    )
}

export default Message
