import CatchPhrase from './components/CatchPhrase';
import ContentsList from './components/ContentsList';
import Info from './components/Info';
import Map from './components/Map';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
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
import Header from './components/Header';

function App() {
  const appJs = useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = './resources/js/app.js';
    head.appendChild(scriptUrl);
  }, []);
  return (
    <>
      <Header />
      <Menu />
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
      {appJs}
    </>
  )
}

export default App;