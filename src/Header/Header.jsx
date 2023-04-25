import React from 'react'
import styles from './Header.module.css'
import { Link, BrowserRouter } from 'react-router-dom'

export default function Header(props) {
    if (!props.isHeaderHidden) {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.prompt}>
                        <p>{props.headerInfo.prompt}</p>
                    </div>

                    <div className={styles.navButtons}>
                        <a href="javascript:void(0)" onClick={props.hideMainScreen}>Обновить плеер</a>
                        <Link to="/">Главная</Link>
                        <Link to="/resume">Резюме</Link>
                    </div>
                </div>
                <div className={styles.separator}></div>
            </div>
        );
    }
    else {
        return (<div></div>)
    }
}
