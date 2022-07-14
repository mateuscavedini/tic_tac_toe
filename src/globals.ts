import { Tokens } from "./types/Tokens";

export let user: Tokens
export let cpu: Tokens
export const setTokens = (token: Tokens): void => {
    user = token
    cpu = user === "X" ? "O" : "X"

    console.log(`user: ${user} | cpu: ${cpu}`)
}