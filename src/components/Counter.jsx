let counter=0;

const increase = () => {
    console.log('counter = '+counter);
    counter++;
}
const Count = () => {
    return(
        <button className="Counter" onClick={increase}>Counter</button>
    )
}
export default Count;