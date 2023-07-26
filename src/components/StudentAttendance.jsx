const IsHere = () => {
    const names = {
      'Harvy': 'is here',
      'Louis': 'is not here',
      'Jessica': 'is here',
      'Dona': 'is not here',
      'Mike': 'is here',
      'Rachel': 'is not here'
    };
  
    return (
      <div className="StudentsAttendance">
        <h2>Students Names</h2>
        <ul>
          {Object.keys(names).map((name) => (
            <li key={name}>
              <label>{name}</label><br />
              <label className={names[name] === 'is here' ? 'green' : 'red'}>
              {names[name]}
            </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IsHere;