import About from './components/About';
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
    </div>
  );
}

export default App;
