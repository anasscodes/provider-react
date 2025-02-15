import './App.css';
import CountriesList from './compnents/countries/CountriesList';
import CounterProvider from './context/CounterProvider';




function App() {
  return (
   
    <>
    
    <CounterProvider>
        <div className='container' >
          <CountriesList/>
          {/* <Counter/> */}
        </div>
    </CounterProvider>
        
    
    </>

  );
}

export default App;
