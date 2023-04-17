/*let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array

myLeads = JSON.parse(myLeads);

// 2. Push a new value to the array

myLeads.push("www.svt.se");

// 3. Turn the array into a string again

myLeads = JSON.stringify(myLeads);

// 4. Console.log the string using typeof to verify that it's a string

console.log(typeof myLeads);
*/

let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const inputEl = document.getElementById("input-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    let myLeads = leadsFromLocalStorage
    renderLead()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //document.getElementById("input-el").value=""; 
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log((myLeads));
    renderLead()
}) 
// 1. Save a key-value pair in localStorage
/*
localStorage.setItem("myLeads", "www.skritta.se")
// 2. Refresh the page. Get the value and log it to the console

console.log(localStorage.getItem("myLeads"))
// 3. Clear localStorage
localStorage.clear();


// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
*/

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