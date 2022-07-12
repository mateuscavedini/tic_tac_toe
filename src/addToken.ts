import { Tokens } from "./types/Tokens"

export const addToken = (square: HTMLDivElement, token: Tokens): void => {
    square.textContent = token
}