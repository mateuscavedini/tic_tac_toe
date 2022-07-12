import { Tokens } from "./types/Tokens";

export const disabledElements = document.querySelectorAll(".disabled") as NodeListOf<HTMLDivElement>
export const popup = document.querySelector("#popup") as HTMLDivElement
export const selectX = document.getElementById("playerX") as HTMLButtonElement
export const selectO = document.getElementById("playerO") as HTMLButtonElement

export let user: Tokens
export let cpu: Tokens
export const setTokens = (value: Tokens): void => {
    user = value
    if (value === "X") {
        cpu = "O"
    } else {
        cpu = "X"
    }

    console.log(`user: ${user} | cpu: ${cpu}`)
}