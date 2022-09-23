import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const dateZero = (date: number) => {
        return `${date < 10 ? "0" : ""}${date}`
    }

    const stringTime2 = `${dateZero(date.getHours())}:${dateZero(date.getMinutes())}:${dateZero(date.getSeconds())}`// fix with date
    const stringDate2 = `${dateZero(date.getDate())}.${dateZero(date.getMonth())}.${dateZero(date.getFullYear())}` //fix with date
    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                    <div>
                        {stringDate}
                    </div>
                )
                :
                <br/>
            }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
