import { result } from "./globals"
import { handleClasses } from "./handleClasses"

export const displayWinner = (winner: string, squares: HTMLDivElement[]): void => {
    for (let square of squares) {
        const resultText: string = winner ? `Game is over! ${winner} won!` : "Game draw!"

        result.textContent = resultText
        
        handleClasses(square, "changeColor", "add")
    }
}