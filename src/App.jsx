import Label1 from './components/Label'
import dog1 from './assets/dog.png'
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/Contact'
import Count from './components/Counter'
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
      <p className='main' onClick={show}>
        This is calling from main page<br />
        Click me to see the dog
        <img onClick={hide} className='mainImg' src={dog1} width="200px" height="200px" />
      </p>
      <Label1 />
      <Count />
      <hr />
      <About />
      <Services />
      <ContactForm />
    </div>
  );
}

export default App;
