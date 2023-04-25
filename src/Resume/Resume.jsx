import React, { useEffect } from 'react'
import styles from './Resume.module.css'

export default function Resume(props) {
    useEffect(() => {
        props.updateHeaderInfo({prompt: ' '});
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.background} src="PortfResumeBG1.png" alt="Фон" />
        </div>
    );
}
