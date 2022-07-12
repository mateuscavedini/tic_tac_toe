import { setTokens } from "./globals";

export const playerSelector = (target: HTMLInputElement): void => {
    if (target.textContent === "X") {
        setTokens("X")
    } else {
        setTokens("O")
    }
}