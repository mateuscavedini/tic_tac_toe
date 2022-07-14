export const getEmptyTarget = (squares: NodeListOf<HTMLDivElement>): HTMLDivElement => {
    const squaresArray: HTMLDivElement[] = Array.from(squares)
    const squaresTokens: string[] = squaresArray.map(square => square.textContent ? square.textContent : "")
    const targetIndex: number = squaresTokens.indexOf("")
    const targetSquare = squares[targetIndex]
    return targetSquare
}