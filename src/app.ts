import { handleBeggining } from "./handleBeggining"
import { handleSquareClick } from "./handleSquareClick"
import { restartGame } from "./restartGame"

const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
const popup = document.querySelector("#popup") as HTMLDivElement

const squares = document.querySelectorAll(".square") as NodeListOf<HTMLDivElement>

const playerBtns = document.querySelectorAll(".playerBtn") as NodeListOf<HTMLButtonElement>
const restartBtn = document.getElementById("restartBtn") as HTMLButtonElement

playerBtns.forEach(btn => btn.addEventListener("click", e => handleBeggining(squares, disabledElements, popup, e)))

squares.forEach(square => square.addEventListener("click", e => handleSquareClick(squares, e)))

restartBtn.addEventListener("click", () => restartGame(squares))