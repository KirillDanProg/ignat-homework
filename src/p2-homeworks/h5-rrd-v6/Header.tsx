import React from 'react'
import {Link} from "react-router-dom";
import {PATH} from "./Pages";
import styles from "./Pages.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [isShown, setIsShown] = React.useState(false)

    const showMenuHandler = () => {
        isShown ? setIsShown(false) : setIsShown(true)
    }


    return (
        <>
            <div className={`${styles.linksContainer} ${isShown ? styles.shown : ""}`}>

                <Link to={PATH.PRE_JUNIOR} className={styles.linkItem}>PRE_JUNIOR</Link>

                <Link to={PATH.JUNIOR} className={styles.linkItem}>JUNIOR</Link>

                <Link to={PATH.JUNIOR_PLUS} className={styles.linkItem}>JUNIOR_PLUS</Link>
                <SuperButton onClick={showMenuHandler} className={styles.btnMenu}>
                    Menu
                </SuperButton>

            </div>
        </>
    )
}

export default Header
