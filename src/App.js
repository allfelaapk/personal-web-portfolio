import About from './components/About';
import Achievement from './components/Achievement';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Achievement />
      <Contact />
    </div>
  );
}

export default App;
