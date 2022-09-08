
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact_info/Contact'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/About' element={<Home/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
