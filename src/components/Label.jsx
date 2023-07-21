import dog2 from '../assets/dog2.png'

function show() {
  let img = document.querySelector('.mainImg2');
  if(img.style.display = "none") img.style.display = "block";
  else img.style.display = "none"
  }

function Label1(){
    console.log('hello from child page');
    return(
        <p className='child' onClick={show}>
            This is me from component calling <br/>
            Click me tooooooo
            <img className='mainImg2' src={dog2} width="200px" height="200px" /> 
        </p>
    )
}

export default Label1;
