import Home from './components/Home';
import Garbage_Home from './components/Garbage_Home';
import Add from './components/Add';
import Edit from './components/Edit'
import './App.css';
import './bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     
        {/* for path setting */}
        <Router>
          <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Garbage_Home' element={<Garbage_Home/>}/>
            <Route path='/Add' element={<Add/>}/>
            <Route path='/Edit/:id' element={<Edit/>}/>
          </Routes>
<Footer/>
        </Router>       
    
    </div>
  );
}

export default App;
