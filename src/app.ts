import { clickHandler } from "./clickHandler"

const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
const popup = document.querySelector("#popup") as HTMLDivElement

const selectX = document.getElementById("playerX") as HTMLButtonElement
const selectO = document.getElementById("playerO") as HTMLButtonElement

selectX.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))
selectO.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))