//import OverviewPage from './components/pages/OverviewPage'
import React from 'react';
// import HomePage from "./components/pages/HomePage";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Page from './routes/page'

function App() {
  return (
    <div className="App">
        <Header />
        {/* <HomePage /> */}
        <Page />
        <Footer /> 
    </div>
  );
}
 
export default App;
