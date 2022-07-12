import { begginingHandler } from "./begginingHandler"
import { squareHandler } from "./squareHandler"

const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
const popup = document.querySelector("#popup") as HTMLDivElement

const squares = document.querySelectorAll(".square") as NodeListOf<HTMLDivElement>

const selectX = document.getElementById("playerX") as HTMLButtonElement
const selectO = document.getElementById("playerO") as HTMLButtonElement

selectX.addEventListener("click", e => begginingHandler(disabledElements, popup, e))
selectO.addEventListener("click", e => begginingHandler(disabledElements, popup, e))

squares.forEach(square => {
    square.addEventListener("click", e => squareHandler(e))
})