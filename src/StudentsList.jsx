import DisplayBtn from "./Display";

const ShowList = (args) => {
    let names = ["Loui","Ahmed","Noor"]
    let list = document.getElementById("arrPrint")
    let items="";

    for(let i=0;i<args.length;i++)
    items += `<li>${args[i]} <li>`
    return(
        <ul id="arrPrint">
        </ul>
    )
}
export default ShowList