import CatchPhrase from './components/CatchPhrase';
import ContentsList from './components/ContentsList';
import Info from './components/Info';
import Map from './components/Map';
import Contact from './components/Contact';
import { useState, useEffect, useCallback, useRef } from 'react';
import Sns from './components/Sns';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './css/bunin.css';
import './css/cal.css';
import './css/color.css';
import './css/hemo_3.css';
import './css/hemo.css';
import './css/style.css';
import './css/swiper.css';
import './css/menu.css';
import Header from './components/Header';
import Menu2 from './components/Menu2';

function App() {
  return (
    <>
      <div className='l-page'>
        <Header />
        {/* <Menu /> */}
        <Menu2 />
        <main className='l-main'>
          <CatchPhrase />
          <ContentsList />
          <Info />
          <Map />
          <Contact />
          <Sns />
        </main>
        <footer className="l-footer">
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App;