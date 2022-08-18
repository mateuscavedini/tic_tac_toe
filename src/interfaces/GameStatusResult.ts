export interface GameStatusResult {
    gameStatus: "over" | "not over",
    winner?: string,
    winningSquares?: HTMLDivElement[]
}