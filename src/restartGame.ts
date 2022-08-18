import { cpuFirstMove } from "./cpuFirstMove"
import { result, setIsOver } from "./globals"
import { handleClasses } from "./handleClasses"

export const restartGame = (squares: NodeListOf<HTMLDivElement>): void => {
    result.style.visibility = "hidden" // removes result text

    for (let square of squares) {
        square.textContent = "" // removes tokens from the board
        handleClasses(square, "changeColor", "remove") // removes white coloring from those who have it
    }

    cpuFirstMove(squares)

    return setIsOver(false)
}