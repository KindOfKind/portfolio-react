import React, { useState } from 'react'
import ContentIcon from './ContentIcon/ContentIcon';
import styles from './ContentSectionsBar.module.css'
import SectionContentBar from './SectionContentBar/SectionContentBar'

export default function ContentSectionsBar(props) {
    // imagesSources array has to be the same length as videosSources array! Elements of these arrays are related.
    // For example, after opening the second image the second video will be played. 

    return (
        <div className={styles.container}>

            <div className={styles.subContainer}>

            <ContentIcon title={'Labyrinth Game'}
            
                imagesSources={['videos/LabyrinthGame/Menu.jpg', 'videos/LabyrinthGame/Walk.jpg', 'videos/LabyrinthGame/Walls.jpg',
                'videos/LabyrinthGame/Bear.jpg']}
                videosSources={['videos/LabyrinthGame/Menu.mp4', 'videos/LabyrinthGame/Walk.mp4', 'videos/LabyrinthGame/Walls.mp4',
                    'videos/LabyrinthGame/Bear.mp4']}

                prompts={['A very long prompt that will tell a lot about how wrong your ways of living are', 'prompt2', 'prompt3', 'prompt4', '', '']}

                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'Mini Games'}
            
                imagesSources={['videos/MiniGames/LasersImg.png', 'videos/MiniGames/LabyrinthImg.png', 'videos/MiniGames/BombImg.png',
                'videos/MiniGames/RobotImg.png', 'videos/MiniGames/Cannons.png']}
                videosSources={['videos/MiniGames/Lasers.mp4', 'videos/MiniGames/Labyrinth.mp4', 'videos/MiniGames/Bomb.mp4',
                    'videos/MiniGames/Robot.mp4', 'videos/MiniGames/Cannons.mp4']}

                prompts={['', '', '', '', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'Other Games'}
            
                imagesSources={['artPictures/AdminRoom.png', 'artPictures/FA.png', 'artPictures/MangaPage1.png']}
                videosSources={['', '', '']}
                
                prompts={['', '', '', '', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'My Site'}
            
                imagesSources={['videos/Site/Main.png', 'videos/Site/Menus.png', 'videos/Site/CardsReview.png',
                'videos/Site/CardsEditing.png', 'videos/Site/Comments.png']}
                videosSources={['videos/Site/Main.mp4', 'videos/Site/Menus.mp4', 'videos/Site/CardsReview.mp4',
                    'videos/Site/CardsEditing.mp4', 'videos/Site/Comments.mp4']}
                
                    prompts={['', '', '', '', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'My drawings'}
            
                imagesSources={[
                    'artPictures/AdminRoom.png', 'artPictures/FA.png', 'artPictures/MangaPage1.png', 'artPictures/16-2.png',
                    'artPictures/17-2.png', 'artPictures/18-2.png', 'artPictures/19-2.png', 'artPictures/20.png', 'artPictures/21.png'
                ]}
                videosSources={['', '', '', '', '', '', '', '', '']}
                
                prompts={['', '', '', '', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            </div>

        </div>
    );
}
