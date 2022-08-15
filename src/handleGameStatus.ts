import { checkGameStatus } from "./checkGameStatus"
import { endGame } from "./endGame"
import { GameStatusResult } from "./interfaces/GameStatusResult"

export const handleGameStatus = (squares: NodeListOf<HTMLDivElement>): void => {
    const results: GameStatusResult = checkGameStatus(squares)
    const gameStatus = results.gameStatus
    const hasWinner = results.hasWinner

    if (hasWinner) {
        const winner = results.winner!
        endGame(winner)
    } else if (gameStatus === "over") {
        endGame()
    }
}