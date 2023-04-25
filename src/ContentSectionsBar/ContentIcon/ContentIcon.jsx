import React, { useState } from 'react'
import styles from './ContentIcon.module.css'
import SectionContentBar from '../SectionContentBar/SectionContentBar'

export default function ContentIcon(props) {
    const [barsState, setBarsState] = useState({ isContentBarHovered: false, isSectionBarHovered: false, position: { top: '0', left: '0' }, images: [] });
    const [isSectionBarHovered, setIsSectionBarHovered] = useState(false);
    const [shouldCloseContent, setShouldCloseContent] = useState(false);

    // If props.badVision == true { *set title style with black markup* }

    const showSectionContent = (e, images, videos) => {
        // if(!e.target.className) return;
        // const isSection = e.target.className.indexOf("_section");
        const rect = e.target.getBoundingClientRect();
        if (images) {
            setBarsState({
                isSectionBarHovered: true,
                position: { top: rect.top - 1, left: rect.left + 100 },
                images, videos
            });
        }
    }

    const onSectionBarHover = () => {
        setBarsState({ ...barsState, isSectionBarHovered: true });
    }

    const onSectionBarBlur = () => {
        setBarsState({ ...barsState, isSectionBarHovered: false });
    }

    const onIconHoverHandler = (e) => {
        showSectionContent(e, props.imagesSources, props.videosSources);
    }

    const onIconBlurHandler = () => {   // Without the delay onMouseLeave event on SectionContentBar may not have enough time to occur.
        setTimeout(() => {
            setShouldCloseContent(true);
        }, 100)
    }

    if (shouldCloseContent == true) {
        setShouldCloseContent(false);
        onSectionBarBlur();
    }

    return (
        <div className={styles.container} onMouseEnter={(e) => onIconHoverHandler(e)} onMouseLeave={onIconBlurHandler}>
            <div className={styles.section}>
                <div className={`${styles.image}`}></div>
                <div className={styles.title}>{props.title}</div>
            </div>

            {barsState.isSectionBarHovered &&
                <SectionContentBar state={barsState} onSectionBarHover={onSectionBarHover} onSectionBarBlur={onSectionBarBlur}
                    switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo} prompts={props.prompts}/>
            }
        </div>
    );
}
