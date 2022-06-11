
import './App.css';
import Persons from './Components/Persons.jsx';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <h1>MIS PERSONAJES IMPORTANTES DE LA PROGRAMACIÓN</h1>
    </header>
    <nav>
        <Link className="link" to='/'><button className='tarea-boton-nav'> Home</button></Link>
        <Link className="link" to='/ada'><button className='tarea-boton-nav'> Ada Lovelance </button></Link>
        <Link className="link" to='/niklaus'><button className='tarea-boton-nav'> Niklaus Wirth</button></Link>
        <Link className="link" to='/bill'><button className='tarea-boton-nav'>Bill Gates</button></Link>
        <Link className="link" to='/gosling'><button className='tarea-boton-nav'> James Gosling </button></Link>
        <Link className="link" to='/sergio'><button className='tarea-boton-nav'> Sergio Marentes</button></Link>
      </nav>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/:personas" element={<Persons />}/>
              
          
      </Routes>
    
   
    </div>
    </Router>
    
  );
}

export default App;
