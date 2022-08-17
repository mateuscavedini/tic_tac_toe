import { addToken } from "./addToken"
import { checkSquare } from "./checkSquare"
import { isOver, user } from "./globals"
import { handleCpuTurn } from "./handleCpuTurn"
import { handleGameStatus } from "./handleGameStatus"

export const handleSquareClick = (squares: NodeListOf<HTMLDivElement>, e: Event): void => {
    const target = e.target as HTMLDivElement
    const isEmpty: boolean = checkSquare(target)

    if (isEmpty && !isOver) {
        addToken(target, user)
        handleGameStatus(squares)
        handleCpuTurn(squares)
        handleGameStatus(squares)
    }
}