import { result } from "./globals"
import { handleClasses } from "./handleClasses"

export const displayResult = (winner?: string, squares?: HTMLDivElement[]): void => {
    const resultText = winner ? `Game is over! ${winner} won!` : "Game is over! No one won!"
    result.textContent = resultText
    result.style.visibility = "visible"

    if (!winner || !squares) {
        return
    }
    
    for (let square of squares) {
        handleClasses(square, "changeColor", "add")
    }
}