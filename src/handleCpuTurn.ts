import { checkCorners } from "./checkCorners"
import { checkPairs } from "./checkPairs"
import { cpu, user } from "./globals"
import { handleCpuPlay } from "./handleCpuPlay"
import { CornersResult } from "./interfaces/CornersResult"
import { PairsResult } from "./interfaces/PairsResult"

export const handleCpuTurn = (squares: NodeListOf<HTMLDivElement>): void => {
    const cpuResults: PairsResult = checkPairs(squares, cpu)
    const userResults: PairsResult = checkPairs(squares, user)
    const cpuHasPair: boolean = cpuResults.hasPair
    const userHasPair: boolean = userResults.hasPair

    const cornerResults: CornersResult = checkCorners(squares)
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