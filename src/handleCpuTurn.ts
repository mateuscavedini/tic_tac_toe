import { checkCorners } from "./checkCorners"
import { checkPairs } from "./checkPairs"
import { cpu, user } from "./globals"
import { handleCpuPlay } from "./handleCpuPlay"
import { CornersResult } from "./interfaces/CornersResult"
import { PairsResult } from "./interfaces/PairsResult"

const winningCombinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

const winningCornersCombinations: number[][] = [
    [0, 1, 2], [6, 7, 8],
    [0, 3, 6], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export const handleCpuTurn = (squares: NodeListOf<HTMLDivElement>): void => {
    const cpuResults: PairsResult = checkPairs(squares, winningCombinations, cpu)
    const userResults: PairsResult = checkPairs(squares, winningCombinations, user)
    const cpuHasPair: boolean = cpuResults.hasPair
    const userHasPair: boolean = userResults.hasPair

    const cornerResults: CornersResult = checkCorners(squares, winningCornersCombinations)
    const hasEmptyCorner: boolean = cornerResults.hasEmptyCorner

    if (cpuHasPair) {
        handleCpuPlay(squares, cpuResults)
    } else if (userHasPair) {
        handleCpuPlay(squares, userResults)
    } else if (hasEmptyCorner) {
        handleCpuPlay(squares, cornerResults)
    } else {
        handleCpuPlay(squares)
    }
}