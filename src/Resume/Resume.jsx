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
               <a href="https://youtube.com/playlist?list=PLENdZm7P-ZaiqD7HuvIX104i4cop8HgNH" target="_blank">Альбом со всеми видео с главной страницы.</a>
               <br/>
               <a href="https://youtu.be/J1ihiuToFOU" target="_blank">Развлекательный видеоролик по игре PAS.</a>
               <br/>
               <a href="neonpawn.itch.io/phantom-art-sequence?password=Neon_ITMO" target="_blank">PAS на Itch.io.</a>
               <br/>
               <a href="https://www.youtube.com/watch?v=9-voy3AOLRM" target="_blank">Трейлер игры "Hell Over Me".</a>
               <br/>
               <a href="https://spazrael.itch.io/hell-over-me" target="_blank">"Hell Over Me" на Itch.io.</a>
            </div>
        </div>
    );
}
