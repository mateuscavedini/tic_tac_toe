import { begginingHandler } from "./begginingHandler"
import { squareHandler } from "./squareHandler"

const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
const popup = document.querySelector("#popup") as HTMLDivElement

const squares = document.querySelectorAll(".square") as NodeListOf<HTMLDivElement>

const playerBtns = document.querySelectorAll(".playerBtn") as NodeListOf<HTMLButtonElement>

playerBtns.forEach(btn => btn.addEventListener("click", e => begginingHandler(squares, disabledElements, popup, e)))

squares.forEach(square => {
    square.addEventListener("click", e => squareHandler(e))
})