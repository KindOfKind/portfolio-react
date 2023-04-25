import React, { useEffect, useState } from 'react'
import styles from './SectionContentBar.module.css'

export default function SectionContentBar(props) {
    const [imagesList, setImagesList] = useState([]);
    const [timer, setTimer] = useState();
    const [canSwitchScreen, setCanSwitchScreen] = useState(true);

    const [containerStyle, setContainerStyle] = useState({
        top: '0px',
        left: '0px',
        width: '0px',
        opacity: '0'
    });

    useEffect(() => {
        if (props.state) {
            const position = props.state.position;
            const newWidth = props.state.images.length * 100;
            setContainerStyle({
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: `${newWidth}px`,
                opacity: '1'
            });
        }
    }, [props.state]);



    const switchScreenHandler = (e, image, video) => {
        let pasteIndex = image.indexOf('.png');
        if (pasteIndex < 0) pasteIndex = image.indexOf('.jpg');
        if (pasteIndex < 0) pasteIndex = image.indexOf('.');
        const fullImage = image.slice(0, pasteIndex) + '-full' + image.slice(pasteIndex, image.length); // Preview image name + postfix "-full" = fullHD version of this image

        if (canSwitchScreen) {
            const rect = e.target.getBoundingClientRect();
            props.switchMainScreen({height: '100px', width: '200px', left: `${rect.left}px`, top: `${rect.top}px`}, fullImage, video);
            setCanSwitchScreen(false);
            setTimeout(() => {
                setCanSwitchScreen(true);
            }, 1000) // Open image animation time
        }
    }

    useEffect(() => {
        //setImagesList(props.state.images.map((src, index) => <img src={src} key={index}/>))
        const prompts = props.prompts// Ad Hoc to avoid wrong indexing :_)

        setImagesList(props.state.images.map((imgSrc, index) =>
        <div className={styles.image} style={{ backgroundImage: `url(${imgSrc})` }} key={index}
            onClick={(e) => switchScreenHandler(e, imgSrc, props.state.videos[index])}
            onMouseEnter={() => props.updateHeaderInfo({prompt: prompts[index]})}
            onMouseLeave={() => props.updateHeaderInfo({prompt: ''})}
            ></div>
            ))
    }, [props.state.images, canSwitchScreen])



    // Prevent this object from being destroied if user hovered it
    const onMouseEnterHandler = () => {
        if (timer) {
            clearTimeout(timer);
            setTimer();
            props.onSectionBarHover();
        }
    }

    // Wait till the content disappear and destroy this object
    const onMouseLeaveHandler = () => {
        setContainerStyle({ ...containerStyle, width: '0px', opacity: '0' });
        setTimer(setTimeout(() => {
            props.onSectionBarBlur();
        }, 500));
    }

    return (
        <div className={styles.container} style={containerStyle} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <div className={styles.dummy}></div>
            {imagesList}
        </div>
    );
}
