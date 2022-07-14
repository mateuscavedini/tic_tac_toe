import { PairsResult } from "./interfaces/PairsResult";
import { Tokens } from "./types/Tokens";

export const checkPairs = (squares: NodeListOf<HTMLDivElement>, combinations: number[][], player: Tokens): PairsResult => {
    let squareCombination: HTMLDivElement[]
    let tokenCombination: string[]

    let targetIndex: number | undefined
    
    for (let combination of combinations) {
        squareCombination = combination.map(position => squares[position])
        tokenCombination = squareCombination.map(square => square.textContent ? square.textContent : "")

        let playerTokenCount: number = 0
        tokenCombination.forEach(token => {
            if (token === player) {
                playerTokenCount++
            }
        })

        const hasEmptySquare: boolean = tokenCombination.includes("")

        // getEmptyTarget()
        if (playerTokenCount === 2 && hasEmptySquare) {
            const emptyIndex: number = tokenCombination.indexOf("")
            targetIndex = combination[emptyIndex]
            break
        }
    }

    if (typeof targetIndex === "number") {
        return {hasPair: true, targetSquareIndex: targetIndex}
    } else {
        return {hasPair: false}
    }
}