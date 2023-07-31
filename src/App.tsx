import CatchPhrase from './components/CatchPhrase';
import ContentsList from './components/ContentsList';
import Info from './components/Info';
import Map from './components/Map';
import Contact from './components/Contact';
import { useState } from 'react';
import Sns from './components/Sns';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <>
      {/* <Menu /> */}
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
    </>
  )
}

export default App;