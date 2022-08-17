import { result, setIsOver } from "./globals"

export const endGame = (winner?: string): void => {
    result.style.visibility = "visible"

    return setIsOver(true)
}