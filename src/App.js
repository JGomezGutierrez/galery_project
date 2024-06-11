
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navegation        from './components/Navegation';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cataratasiguazu from './components/Cataratasiguazu';
import Chichenitzámexico from './components/Chichenitzámexico';
import Coliseoroma from './components/Coliseoroma';
import Cristoredentor from './components/Cristoredentor';
import Estatualibertad from './components/Estatualibertad';
import Machupicchuperu from './components/Machupicchuperu';


function App() {
  return (
    <Router>
      <div className='app-container'>
        <br />
       <div className='container'>
        <h1 id="title" className='text-center my-3 title-color'>Galería Maravillas del Mundo</h1>
      </div> 
      <br />
        <div className='main-content'>
        <div className='navigation'>
        <Navegation/>
        </div>
          <Routes>
            <Route path="/cataratasiguazu"    element={<Cataratasiguazu   className="image-size"/>} /> 
            <Route path="/chichenitzámexico"  element={<Chichenitzámexico className="image-size"/>} /> 
            <Route path="/coliseoroma"        element={<Coliseoroma       className="image-size"/>} /> 
            <Route path="/cristoredentor"     element={<Cristoredentor    className="image-size"/>} /> 
            <Route path="/estatualibertad"    element={<Estatualibertad   className="image-size"/>} /> 
            <Route path="/machupicchuperu"    element={<Machupicchuperu   className="image-size"/>} /> 
          </Routes>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
