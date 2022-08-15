export const checkBoard = (squares: NodeListOf<HTMLDivElement>): boolean => {
    const squaresArray: HTMLDivElement[] = Array.from(squares)
    const boardTokens: string[] = squaresArray.map(square => square.textContent ? square.textContent : "")
    const hasEmptySquare: boolean = boardTokens.includes("")
    return hasEmptySquare
}