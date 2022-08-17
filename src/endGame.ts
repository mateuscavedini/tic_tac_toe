import { setIsOver } from "./globals"

export const endGame = (winner?: string): void => {
    const resultText: string = winner ? `Game is over! ${winner} won!` : "Game draw!"
    console.log(resultText)

    return setIsOver(true)
}