import './MapView';

import MapView from './MapView';
import '../index.css';

import ReactFullpage from '@fullpage/react-fullpage';
import {Search} from './Search';

import {useState} from 'react';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const Menu = () => (
  <div
    className="menu"
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 100,
    }}
  >
    <ul className="actions">
      <li>
        <a href="#firstPage">Inicio</a>
        <a href="#secondPage">Mapas</a>
        <a href="#thirdPage">About</a>
      </li>
    </ul>
  </div>
);

const FullPage = () => {
  const [input, setInput] = useState('');

  const handleSearch = (newSearch) => {
    setInput(newSearch);
  };

  return (
    <div class="App">
      <Menu />
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        // pluginWrapper={pluginWrapper}

        // fullpage options

        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        render={({state, fullpageApi}) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section 1 home"
                style={{
                  backgroundColor: '#f1f3f9',
                }}
              >
                <div className="container">
                  <h1
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    Buscador de rutas de buses en El Salvador 🚌
                  </h1>

                  <Search input={input} handleSearch={handleSearch} />
                  
                </div>
              </div>
              <div className="section 2">
                <div class="slide">
                  {' '}
                  <MapView />
                </div>
                <div class="slide"> Slide 2 </div>
              </div>
              <div className="section 3">
                <h1>Grupo el Tonas</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default FullPage;
