import React, { useEffect, useState } from 'react'
import styles from './MainScreen.module.css'

export default function MainScreen(props) {
    const nonDisplayState = { isActive: false, height: '0px', width: '0px', top: '0px', left: '0px', transition: '0s', zIndex: '0', backgroundImage: [] };
    const [screen1Info, setScreen1Info] = useState(nonDisplayState);
    const [screen2Info, setScreen2Info] = useState(nonDisplayState);
    const [containerStyle, setContainerStyle] = useState({ background: 'linear-gradient(315deg, rgba(16,19,25,1) 50%, rgba(12,24,36,1) 100%)' });
    const [videoStyle, setVideoStyle] = useState({ opacity: '0' });
    const [videoSrc, setVideoSrc] = useState(props.video);

    const screen1Style = {
        height: screen1Info.height,
        width: screen1Info.width,
        top: screen1Info.top,
        left: screen1Info.left,
        transition: screen1Info.transition,
        zIndex: screen1Info.zIndex
    }

    const screen2Style = {
        height: screen2Info.height,
        width: screen2Info.width,
        top: screen2Info.top,
        left: screen2Info.left,
        transition: screen2Info.transition,
        zIndex: screen2Info.zIndex
    }

    useEffect(() => {
        props.updateHeaderInfo({prompt: ''});
    }, []);

    // Scroll screen up when loading new image

    useEffect(() => {
        if (!(props.rectStyle.height == '0px' || props.rectStyle.width == '0px')) {  // If trying to open image
            if (!screen1Info.isActive) {
                setVideoStyle({ opacity: '0', transition: '1s' });
                setScreen2Info({ ...screen2Info, zIndex: '0' });
                setScreen1Info({ isActive: true, height: '0px', width: '0px', top: '0px', zIndex: '1', transition: '0s', backgroundImage: props.image });
                setScreen1Info({ isActive: true, height: 'auto', width: '100%', top: '0px', left: '0px', transition: '1s, z-index 0s', zIndex: '1', backgroundImage: props.image });

                setTimeout(() => {
                    setScreen2Info(nonDisplayState);
                    if (props.video) {
                        setVideoStyle({ opacity: '1', transition: '1s' });
                        setTimeout(() => {
                            setScreen1Info(nonDisplayState);
                        }, 1000)
                    }
                }, 1000);
            }
            else {
                setVideoStyle({ opacity: '0', transition: '1s' });
                setScreen1Info({ ...screen1Info, zIndex: '0' });
                setScreen2Info({ isActive: true, height: '0px', width: '0px', top: '0px', zIndex: '1', transition: '0s', backgroundImage: props.image });
                setScreen2Info({ isActive: true, height: 'auto', width: '100%', top: '0px', left: '0px', transition: '1s, z-index 0s', zIndex: '1', backgroundImage: props.image });

                setTimeout(() => {
                    setScreen1Info(nonDisplayState);
                    if (props.video) {
                        setVideoStyle({ opacity: '1', transition: '1s' });
                        setTimeout(() => {
                            setScreen2Info(nonDisplayState);
                        }, 1000)
                    }
                }, 1000);
            }
        }
        else {  // If trying to close image (then we should show the default one)
            if (screen1Info.isActive) {
                setScreen1Info({ ...screen1Info, width: '0px', transition: '1s' });
                setTimeout(() => {
                    setScreen1Info(nonDisplayState);
                    setScreen2Info({ isActive: true, height: 'auto', width: '100%', top: '0px', left: '0px', transition: '1s, z-index 0s', zIndex: '1', backgroundImage: './MainPageDefault.png' });
                    setContainerStyle({ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);' })
                }, 1000);
            }
            else {
                setScreen2Info({ ...screen2Info, width: '0px', transition: '1s' });
                setTimeout(() => {
                    setScreen2Info(nonDisplayState);
                    setScreen1Info({ isActive: true, height: 'auto', width: '100%', top: '0px', left: '0px', transition: '1s, z-index 0s', zIndex: '1', backgroundImage: './MainPageDefault.png' });
                }, 1000);
            }
        }

    }, [props.rectStyle]);

    // For the video to close smoothly
    useEffect(() => {
        if (props.video == '') {
            setVideoStyle({ opacity: '0', transition: '1s' });
        }
        if (videoSrc.length > 0) {
            setTimeout(() => {
                setVideoSrc(props.video);
            }, 1000)    // Open image animation duration
        }
        else {
            setVideoSrc(props.video);
        }
    }, [props.video]);

    // If you want to hide the header on click
    // useEffect(() => {
    //     if (props.isHeaderHidden == true) {
    //         setContainerStyle({ ...containerStyle, height: '100%' });
    //     }
    //     else if (props.isHeaderHidden == false) {
    //         setContainerStyle({ ...containerStyle, height: 'calc(100% - 60px)' });
    //     }
    // }, [props.isHeaderHidden])

    // if (screen1Info.backgroundImage == '' && screen2Info.backgroundImage == '' && videoSrc == '') { // Default main screen image
    //     return (
    //         <img className={styles.defaultContainer} src={'./PortfolioMainPage.png'}>
    //     </img>
    //     );
    // }
    return (
        <div className={styles.container} style={containerStyle} onClick={props.toggleHeader}>
            <img className={`${styles.screen} ${styles.screen1}`} style={screen1Style} src={screen1Info.backgroundImage}>

            </img>
            <img className={`${styles.screen} ${styles.screen2}`} style={screen2Style} src={screen2Info.backgroundImage}>

            </img>
            <video className={`${styles.screen} ${styles.videoScreen}`} style={videoStyle} src={videoSrc} autoPlay muted loop>

            </video>
        </div>
    );
}
