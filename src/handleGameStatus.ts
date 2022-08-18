import { checkGameStatus } from "./checkGameStatus"
import { endGame } from "./endGame"
import { setIsOver } from "./globals"

export const handleGameStatus = (squares: NodeListOf<HTMLDivElement>): void => {
    const results = checkGameStatus(squares)
    const gameStatus = results.gameStatus
    const winner = results.winner

    if (gameStatus === "not over") {
        return setIsOver(false)
    } else if (winner) {
        const winningSquares = results.winningSquares!
        return endGame(winner, winningSquares)
    } else {
        return endGame()
    }
}