const playerBtn = document.querySelectorAll(".playerBtn")
const disabledElements = document.querySelectorAll(".disabled")
const popup = document.querySelector("#popup")
let player
let cpu

// const playerX = document.querySelector("#playerX")
// const playerO = document.querySelector("#playerO")

const playerX = document.getElementById("playerX")
const playerO = document.getElementById("playerO")


playerX.addEventListener("click", playerHandler)
playerO.addEventListener("click", playerHandler)

function beggining() {
    
}

function playerHandler(e) {
    disabledElements.forEach((element) => {
        element.classList.remove("disabled")
        element.classList.add("enabled")
    })

    popup.classList.add("translate")
    setTimeout(() => popup.style.display = "none", 1000)

    player = e.target.innerHTML
    if (player === "X") {
        return cpu = "O"
    }
    return cpu = "X"
}

// function playerHandler(e) {
//     disabledElements.forEach((element) => {
//         element.classList.remove("disabled")
//         element.classList.add("enabled")
//     })

//     popup.classList.add("translate")
//     setTimeout(() => popup.style.display = "none", 1000)

//     player = e.target.innerHTML
//     if (player === "X") {
//         return cpu = "O"
//     }
//     return cpu = "X"
// }

// playerBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         disabledElements.forEach((element) => {
//             element.classList.remove("disabled")
//             element.classList.add("enabled")
//         })

//         popup.classList.add("translate")
//         setTimeout(() => popup.style.display = "none", 1000)

//         player = btn.textContent
//         if (player === "X") {
//             return cpu = "O"
//         }
//         return cpu = "X"
//     })
// })