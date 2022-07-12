import { addToken } from "./addToken"
import { cpu } from "./globals"

export const cpuFirstMove = (squares: NodeListOf<HTMLDivElement>): void => {
    const cornersPositions: number[] = [0, 2, 6, 8] // cornersIndex
    const randomIndex: number = Math.floor(Math.random() * cornersPositions.length)
    const firstMovePosition: number = cornersPositions[randomIndex]
    const firstMoveTarget: HTMLDivElement = squares[firstMovePosition]
    addToken(firstMoveTarget, cpu)
}