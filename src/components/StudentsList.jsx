const StudentsList = () => {
    const names = ["Louis","Ahmed","Noor"]
    const show = (name) => {
      alert(name + " is calling");
    }
    return (
        <div className="StudentsList">
        <h2>Students Names</h2>
        <ul>
        {names.map((name) => (
          <li key={name}>
            <label>{name}</label><button onClick={() => show(name)}>call {name}</button></li>
        ))}
        </ul>
        </div>
    );
  }
  
export default StudentsList