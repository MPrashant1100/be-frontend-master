import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path='/' element={<Main name = "Prashant"></Main>}/>
      <Route path='contact' element = {<Contact/>}/>
    </Routes>        
    </div>
  );
}

export default App; 
