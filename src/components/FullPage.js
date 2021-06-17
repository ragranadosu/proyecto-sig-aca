import './MapView'

import MapView from "./MapView";
import  "../index.css";

import ReactFullpage from '@fullpage/react-fullpage';


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
          <a href="#secondPage">
           Mapas
          </a>
          <a href="#thirdPage" >
            About
          </a>
      
        </li>
      </ul>
    </div>
  );

const FullPage = () => (
    <div class="App">
    <Menu/>
    <ReactFullpage
       debug /* Debug logging */

       // Required when using extensions
      // pluginWrapper={pluginWrapper}

       // fullpage options
     
       navigation
       anchors={['firstPage', 'secondPage', 'thirdPage']}
     
  

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
      
          <div className="section 1 home">
            <div className="container">
         
            <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-textbox-1-col">
                                       <h1 className="tm-text">Titulo</h1>
                                       <h2 className="tm-text">lorem ipsum egeksi eoifodma lorem ipsum egeksi eoifodma lorem ipsum egeksi eoifodma lorem ipsum egeksi eoifodma lorem ipsum egeksi eoifodma</h2>
                                    </div>
      
      
        </div>
          </div>
          <div className="section 2">
          <div class="slide">  <MapView/></div>
	<div class="slide"> Slide 2 </div>
         
          </div>
          <div className="section 3">
        <h1>
             Grupo el Tonas
             </h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  </div>
);


export default FullPage;
