import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Opdrachten from './pages/Opdrachten';
import OpdrachtenDetail from './pages/OpdrachtenDetail';
import Expertise from './pages/Expertise';
import Mensen from './pages/Mensen';
import MensenDetail from './pages/MensenDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opdrachten" element={<Opdrachten />} />
            <Route path="/opdrachten/:id" element={<OpdrachtenDetail />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mensen" element={<Mensen />} />
            <Route path="/mensen/:id" element={<MensenDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
