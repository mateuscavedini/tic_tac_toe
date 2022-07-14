import { setTokens } from "./globals";

export const playerSelector = (target: HTMLDivElement): void => {
    target.dataset.token == "X" ? setTokens("X") : setTokens("O")
}