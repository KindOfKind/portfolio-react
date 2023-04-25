import React, { useState } from 'react';
import './App.css';
import ContentSectionsBar from './ContentSectionsBar/ContentSectionsBar';
import Header from './Header/Header';
import MainScreen from './MainScreen/MainScreen';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Resume from './Resume/Resume';

function App() {
  const defaultMainScreenData = { rectStyle: { height: '0px', width: '0px', top: '0px', left: '0px' }, image: './MainPageDefault.png', video: '' };
  const [mainScreenData, setMainScreenData] = useState(defaultMainScreenData);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [headerInfo, setHeaderInfo] = useState( { prompt: 'Здесь отображаются подсказки. Если только у вашего устройства не маленький экран...'} );
  
  const switchMainScreen = (rectStyle = defaultMainScreenData, image = './MainPageDefault.png', video = '') => {
    setMainScreenData({ rectStyle, image, video });
  }

  const hideMainScreen = () => {
    setMainScreenData(defaultMainScreenData);
  }

  const updateHeaderInfo = (data) => {
    let headerPrompt = data.prompt;
    if (headerPrompt == '')
    {
      headerPrompt = 'Здесь отображаются подсказки. Если только у вашего устройства не маленький экран...';
    }

    setHeaderInfo({...data, prompt: headerPrompt});
  }

  const toggleHeader = () => {
    // Uncomment if you want to hide header by clicking at main window
    
    //setIsHeaderHidden(!isHeaderHidden);
  }

  return (
    <div className="App" >
      <Router>
      <Header hideMainScreen={hideMainScreen} headerInfo={headerInfo} isHeaderHidden={isHeaderHidden} toggleHeader={toggleHeader} />

        <Route render={({ location }) => (
          <Switch>

            <Route exact path="/portfolio-react/" >
              <ContentSectionsBar switchMainScreen={switchMainScreen} updateHeaderInfo={updateHeaderInfo}/>
              <MainScreen rectStyle={mainScreenData.rectStyle} image={mainScreenData.image} video={mainScreenData.video} switchMainScreen={switchMainScreen}
                isHeaderHidden={isHeaderHidden} toggleHeader={toggleHeader} updateHeaderInfo={updateHeaderInfo}/>
            </Route>

            <Route path="/portfolio-react/resume">
              <Resume updateHeaderInfo={updateHeaderInfo}/>
            </Route>

          </Switch>
        )} />
      </Router>
    </div>
  );
}

export default App;
