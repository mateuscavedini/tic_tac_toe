import { winningCornersCombinations } from "./globals"
import { CornersResult } from "./interfaces/CornersResult"

const cornerPositions: number[] = [0, 2, 6, 8]

export const checkCorners = (squares: NodeListOf<HTMLDivElement>): CornersResult => {
    let squareCombination: HTMLDivElement[]
    let tokenCombination: string[]

    let targetIndex: number | undefined

    for (let combination of winningCornersCombinations) {
        squareCombination = combination.map(position => squares[position])
        tokenCombination = squareCombination.map(square => square.textContent ? square.textContent : "")

        
        
        let emptyTokenCount: number = 0
        tokenCombination.forEach(token => {
            if (token === "") {
                emptyTokenCount++
            }
        })

        if (emptyTokenCount === 2) {
            // ocurring two empty tokens infers that there's at least one empty corner
            const cornerPositionsInCombination: number[] = combination.filter(position => cornerPositions.includes(position))
            const cornerSquares: HTMLDivElement[] = cornerPositionsInCombination.map(position => squares[position])
            const cornerSquaresTokens: string[] = cornerSquares.map(square => square.textContent ? square.textContent : "")
            const emptyCornerindex: number = cornerSquaresTokens[0] === "" ? 0 : 2
            targetIndex = combination[emptyCornerindex]
            break
        }
    }
    if (targetIndex) {
        return {hasEmptyCorner: true, targetSquareIndex: targetIndex}
    } else {
        return {hasEmptyCorner: false}
    }
}