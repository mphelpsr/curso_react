
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';

function App() {

  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contato" element={<Contato />}  />
        <Route path="/empresa" element={<Empresa />}  />
      </Routes>

      <Footer/> 

    </Router>
    
  );
}

export default App;
