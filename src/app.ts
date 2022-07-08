import { clickHandler } from "./clickHandler"
import { Players } from "./types/Players"

// const playerBtn = document.querySelectorAll(".playerBtn") as NodeListOf<HTMLButtonElement>
const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
const popup = document.querySelector("#popup") as HTMLDivElement

const selectX = document.getElementById("playerX") as HTMLButtonElement
const selectO = document.getElementById("playerO") as HTMLButtonElement

let player: Players
let cpu: Players



selectX.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))
selectO.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))