import { user } from "./globals"
import { addToken } from "./addToken"
import { checkSquare } from "./checkSquare"

export const squareHandler = (e: Event): void => {
    const target = e.target as HTMLDivElement // HTMLInputElement
    const isEmpty: boolean = checkSquare(target)

    if (isEmpty) {
        addToken(target, user)
    }
}