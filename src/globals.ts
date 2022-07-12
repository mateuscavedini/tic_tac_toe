import { Tokens } from "./types/Tokens";

export let user: Tokens
export let cpu: Tokens
export const setTokens = (token: Tokens): void => {
    user = token
    if (user === "X") {
        cpu = "O"
    } else {
        cpu = "X"
    }

    console.log(`user: ${user} | cpu: ${cpu}`)
}