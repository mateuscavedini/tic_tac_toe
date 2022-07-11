import { setTokens } from "./globals";

export const playerSelector = (target: HTMLInputElement): void => {
    if (target.value === "X") {
        setTokens("X")
    } else {
        setTokens("O")
    }
}