import './app.css';
import Navbar from './navbar'
import Projects from './projects'
import About from './about'
import Footer from './footer'
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
