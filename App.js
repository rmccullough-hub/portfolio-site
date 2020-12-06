import './App.css';
import Navbar from './navbar'
import Projects from './projects'
import About from './about'
import Contact from './contact'
import Home from './home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
