import { addToken } from "./addToken"
import { checkSquare } from "./checkSquare"
import { user } from "./globals"
import { handleCpuTurn } from "./handleCpuTurn"

export const handleSquareClick = (squares: NodeListOf<HTMLDivElement>, e: Event): void => {
    const target = e.target as HTMLDivElement
    const isEmpty: boolean = checkSquare(target)

    if (isEmpty) {
        addToken(target, user)
        handleCpuTurn(squares)
    }
}