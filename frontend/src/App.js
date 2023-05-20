import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import CampaignHome from './components/CampaignHome';
import Headers from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './bootstrap.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {/* for path setting */}
        <Router>
          <Headers/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/CompaignHome' element={<CampaignHome/>}/>
            <Route path='/Add' element={<Add/>}/>
            <Route path='/Edit/:id' element={<Edit/>}/>
          </Routes>
          <Footer/>
        </Router>       
    </div>
  );
}

export default App;
