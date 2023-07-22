
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css';

function App() {
  console.log('hello from main page');
  function show() {
    let img = document.querySelector('.mainImg');
    if(img.style.display = "none") img.style.display = "block";
    else img.style.display = "none";
  }
  function hide() {
    document.querySelector('.mainImg').style.display = "none";
  }
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
