

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let savadd = " " + count + " -"
    saveEl.textContent += savadd
    count = 0
    countEl.innerText = count
}


