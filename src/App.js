//import OverviewPage from './components/pages/OverviewPage'
import React from 'react';
import HomePage from "./components/pages/HomePage";
import Header from "./components/layout/Header";
import Routes from './routes/Routes';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className="App">
        <Header />
        <HomePage />
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
        
        <Footer /> 
    </div>
  );
}
 
export default App;
