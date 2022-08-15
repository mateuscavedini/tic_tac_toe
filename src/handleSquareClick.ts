import { addToken } from "./addToken"
import { checkGameStatus } from "./checkGameStatus"
import { checkSquare } from "./checkSquare"
import { user } from "./globals"
import { handleCpuTurn } from "./handleCpuTurn"
import { handleGameStatus } from "./handleGameStatus"

export const handleSquareClick = (squares: NodeListOf<HTMLDivElement>, e: Event): void => {
    const target = e.target as HTMLDivElement
    const isEmpty: boolean = checkSquare(target)

    if (isEmpty) {
        addToken(target, user)
        handleGameStatus(squares)
        handleCpuTurn(squares)
        handleGameStatus(squares)
    }
}