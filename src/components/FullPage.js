import './MapView';

import MapView from './MapView';
import '../index.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/default.css';
import '../assets/js/main.js';
import bus from '../assets/img/bus4.png';
import ReactFullpage from '@fullpage/react-fullpage';
import RoutesLists from './RoutesList';
import {Search} from './Search';
import {useState} from 'react';
import data from '../data/RoutesNames';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const Menu = () => (
  <div>
    <div className="navbar-area section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTwo"
                aria-controls="navbarTwo"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarTwo"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item ">
                    <a className="page-scroll" href="#firstPage">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#secondPage">
                      Mapas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#thirdPage">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FullPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [routeSelected, setRouteSelected] = useState([]);

  const handleSearch = (newSearch) => {
    setSearchQuery(newSearch);
  };

  return (
    <div >
      <Menu />
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        // pluginWrapper={pluginWrapper}
        // fullpage options

        navigation
        anchors={['firstPage', 'secondPage', 'thirdPage']}
        sectionsColor={[
          '#006f6f',
          '#4BBFC3',
          '#7BAABE',
          '#ff5f45',
          '#4BBFC3',
          '#7BAABE',
          '#ff5f45',
          '#bd1710',
          '#f0c222',
        ]}
        slidesNavigation={false}
        
        autoScrolling={true}
        scrollHorizontally={true}
        navigation={false}
        render={({state, fullpageApi}) => {

          const handleClickItem = (item) => {
            setRouteSelected([item]);
            fullpageApi.moveSectionDown()
          };

          return (
            <ReactFullpage.Wrapper>
              <div className="section 1 home">
                <div className="carousel-item active home">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="slider-content">
                          <h1 className="title">BusApp</h1>
                 
                          <Search
                            handleSearch={handleSearch}
                            filteredRoute={searchQuery}
                            handleClickItem={handleClickItem}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-image-box d-none d-lg-flex align-items-end">
                    <div className="slider-image">
                      <img src={bus} alt="Hero" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section 2">
                <div className="slide">
                  {' '}
                  <MapView rutas={routeSelected}/>
                </div>
                <div className="slide">
                    <RoutesLists routesBuses={data.buses} routesMicrobuses={data.microbuses} rutas={routeSelected}/>
                </div>
              </div>
              <div className="section 3">
                <h1  className="title title2">Integrantes del grupo</h1>
                <h1>Raul Antonio Granados Hernández  00138816



</h1>
<h1>David Alejandro Massana Zacatares 00072416 </h1>
<h1>Carlos José Trigueros Rivas 00082217 </h1>
<h1>Fernando José García Anaya 00051716</h1>
<h1>Leandro Alexis Ayala Hernandez 00081211</h1>

              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default FullPage;
