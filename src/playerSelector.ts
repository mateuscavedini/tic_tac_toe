import { setTokens } from "./globals";

export const playerSelector = (target: HTMLInputElement): void => {
    if (target.dataset.token === "X") {
        setTokens("X")
    } else {
        setTokens("O")
    }
}