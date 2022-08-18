import { displayResult } from "./displayResult"
import { setIsOver } from "./globals"

export const endGame = (winner?: string, squares?: HTMLDivElement[]): void => {
    displayResult(winner, squares)

    return setIsOver(true)
}