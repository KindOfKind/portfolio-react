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
               <a href="https://www.youtube.com/playlist?list=PLOIAXDYXITiQWNSZtu4nB8t7J-KHXhHi4" target="_blank">Альбом со всеми видео.</a>
            </div>
        </div>
    );
}
