import { Tokens } from "./types/Tokens";

export let user: Tokens
export let cpu: Tokens
export const setTokens = (token: Tokens): void => {
    user = token
    cpu = user === "X" ? "O" : "X"

    console.log(`user: ${user} | cpu: ${cpu}`)
}

export const winningCombinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

export const winningCornersCombinations: number[][] = [
    [0, 1, 2], [6, 7, 8],
    [0, 3, 6], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]