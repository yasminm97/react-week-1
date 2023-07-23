const DisplayBtn = () => {
    const names = ["Loui","Ahmed","Noor"]
    const show = (name) => {
      alert(name + " is calling");
    }
    return (
        <div>
        <h2>Students Names</h2>
        <ul>
        {names.map((name) => (
          <li>{name}<button onClick={() => show(name)}>call {name}</button></li>
          
        ))}
        </ul>
        </div>
    );
  }
  
export default DisplayBtn