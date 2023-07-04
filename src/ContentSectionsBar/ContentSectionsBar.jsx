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

            <ContentIcon title={'Hell Over Me'}
            
                imagesSources={['videos/prevs/GH_1.png', 'videos/prevs/GH_2.png', 'videos/prevs/GH_3.png', 'videos/prevs/GH_4.png']}
                videosSources={['videos/GH_1.mp4', 'videos/GH_2.mp4', 'videos/GH_3.mp4', 'videos/GH_4.mp4']}

                prompts={['FPS Rougelike "Hell Over Me". Демонстрация сделанных мной ассетов.',
                'Механики передвижения, процедурные анимации, компоненты персонажа с множеством характеристик.',
                'HUD, активация скиллов, сражение с боссом.',
                'Тотем с модификаторами персонажа игрока, анимация перезарядки бонусом.']}

                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'Phantom Art Sequence'}
            
                imagesSources={['videos/prevs/PAS_1.png', 'videos/prevs/PAS_2.png']}
                videosSources={['videos/PAS_1.mp4', 'videos/PAS_2.mp4']}

                prompts={['Платформер-головоломка PAS. Диалоги, способности, осмотр карты. Ссылка на видео по игре в разделе "Резюме".',
                'Противники из первых четырёх уровней.', '', '', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'IWA'}
            
                imagesSources={['videos/prevs/IWA_1.png', 'videos/prevs/IWA_2.png', 'videos/prevs/IWA_3.png', 'videos/prevs/IWA_4.png']}
                videosSources={['videos/IWA_1.mp4', 'videos/IWA_2.mp4', 'videos/IWA_3.mp4', 'videos/IWA_4.mp4']}
                
                prompts={['Многопользовательский хоррор-шутер Inhuman Woods Action. Первый монстр.',
                'Второй монстр и зомби.',
                'Лут, обмен, открытие дверей карточками, условие победы.',
                'Лобби, смотровая вышка, прожектор, генератор, эмоции, анимации от третьего лица.', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'Other Games'}
            
                imagesSources={['videos/prevs/MiniGames_1.png', 'videos/prevs/MiniGames_2.png', 'videos/prevs/MiniGames_3.png', 'videos/prevs/Labyrinth_1.png']}
                videosSources={['videos/MiniGames_1.mp4', 'videos/MiniGames_2.mp4', 'videos/MiniGames_3.mp4', 'videos/Labyrinth_1.mp4', '', '', '', '', '']}
                
                prompts={['Мой первый проект на UE4. 3D модель робота, анимации, мини-игра с лазерами.',
                'Мини-игра с пушками, мини-игра с поиском подарков (недоделанная), подсчёт очков команд.',
                'Мини-игра с обезвреживанием бомбы, подбор предметов, инвентарь.',
                'Многопользовательская игра, в которой игроки должны восстановить невидимый лабиринт раньше соперников.', '', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            <ContentIcon title={'My Drawings'}
            
                imagesSources={['artPictures/MyDrawings.png']}
                videosSources={[]}
                
                prompts={['Мои рисунки.', '', '', '', '', '', '', '', '', '']}
            
            switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>


            <ContentIcon title={'My Web App'}
            
                imagesSources={['videos/Site/Main.png', 'videos/Site/Menus.png', 'videos/Site/CardsReview.png',
                'videos/Site/CardsEditing.png', 'videos/Site/Comments.png']}
                videosSources={['videos/Site/Main.mp4', 'videos/Site/Menus.mp4', 'videos/Site/CardsReview.mp4',
                    'videos/Site/CardsEditing.mp4', 'videos/Site/Comments.mp4']}
                
                    prompts={['Моё веб-приложение для изучения языков по манге и комиксам. Просмотр и редактирование карточек со словами и грамматикой.',
                    'Просмотр секций: профиль, изученные карточки, коллекция манги.',
                    'Анимации карточек со словами и грамматикой.',
                    'Открытие манги. Создание прямоугольных областей поверх изображений и добавление к ним карточек.',
                    'Секция с комментариями: добавление комментариев, ответ на сообщения, просмотр чужих профилей.', '', '', '', '', '']}
                
                switchMainScreen={props.switchMainScreen} updateHeaderInfo={props.updateHeaderInfo}/>

            </div>

        </div>
    );
}
