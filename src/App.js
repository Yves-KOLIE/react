import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import './App.css';

import Navigation from "./components/Navigation";
import Acceuil from "./components/Acceuil";
import Countries from "./components/Countries";
import Apropos from "./components/a-propos";
import Footer from "./components/Footer";
import Etudiants from "./components/Etudiants";


function App() {
  return (
    <div className="App">

      <Navigation />

      <Routes>
      <Route path="/" element={<Acceuil />} />
        <Route path="/accueil" element={<Acceuil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/list-etudiants" element={<Etudiants />} />
         <Route path="/countries" element={<Countries />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
