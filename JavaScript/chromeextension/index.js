const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
//let ullEll = document.getElementById("ull-ell");
let myLeads = [];
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //document.getElementById("input-el").value=""; 
    inputEl.value="";
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    //console.log(myLeads);
    renderLead()
}) 


function renderLead(){
    let listItems = ""
    for (let i=0; i<myLeads.length; i++){
    //listItems.push(myLeads[i]);
//    listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
                <li>
                        <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                        </a>
                </li>
                `
   // window.open(url, '_blank').focus();
    //console.log(listItems);
    /*const li = document.createElement("li")
    li.textContent = myLeads[i]
    ullEll.append(li)
    */
   ulEl.innerHTML = listItems
}


}