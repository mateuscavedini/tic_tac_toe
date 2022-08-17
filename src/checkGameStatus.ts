import { checkBoard } from "./checkBoard"
import { user, winningCombinations } from "./globals"
import { GameStatusResult } from "./interfaces/GameStatusResult"

export const checkGameStatus = (squares: NodeListOf<HTMLDivElement>): GameStatusResult => {
    let squareCombination: HTMLDivElement[]
    let tokenCombination: string[]
    let hasWinner: boolean = false
    let _winner: string | undefined

    for (let combination of winningCombinations) {
        squareCombination = combination.map(position => squares[position])
        tokenCombination = squareCombination.map(square => square.textContent ? square.textContent : "")

        hasWinner = tokenCombination.every(token => {
            if (token !== "") {
                return token === tokenCombination[0]
            } else {
                return false
            }
        })

        if (hasWinner) {
            _winner = tokenCombination[0] === user ? "user" : "cpu"
            break
        }
    }

    const hasEmptySquare: boolean = checkBoard(squares)

    if (hasWinner) {
        return { gameStatus: "over", winner: _winner }
    } else if (!hasEmptySquare) {
        return { gameStatus: "over" }
    } else {
        return { gameStatus: "not over" }
    }
}