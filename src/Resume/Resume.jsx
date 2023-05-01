import React, { useEffect } from 'react'
import styles from './Resume.module.css'

export default function Resume(props) {
    useEffect(() => {
        props.updateHeaderInfo({prompt: ' '});
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.background} src="PortfResumeBG1.png" alt="Фон" />

            <div className={styles.youtubeVideoContainer}>
               <a href="https://youtube.com/playlist?list=PLENdZm7P-ZaiqD7HuvIX104i4cop8HgNH" target="_blank">Альбом со всеми видео.</a>
               <br/>
               <a href="https://youtu.be/J1ihiuToFOU" target="_blank">Развлекательный видеоролик по игре PAS.</a>
            </div>
        </div>
    );
}
