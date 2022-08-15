export interface GameStatusResult {
    gameStatus: "over" | "not over",
    hasWinner: boolean,
    winner?: string
}