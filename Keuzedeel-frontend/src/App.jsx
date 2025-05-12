import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Opdrachten from './pages/Opdrachten';

import Expertise from './pages/Expertise';
import Mensen from './pages/Mensen';

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
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mensen" element={<Mensen />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
