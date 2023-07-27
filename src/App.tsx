import CatchPhrase from './components/CatchPhrase';
import ContentsList from './components/ContentsList';
import Info from './components/Info';
import { useState } from 'react';


type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}


function App() {  
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })
  return(
    <div>
      <CatchPhrase />
      <ContentsList />
      <Info />
      {/* <Form setCity={setCity} getWeather={getWeather} /> */}
    </div> 
 )
}

export default App;