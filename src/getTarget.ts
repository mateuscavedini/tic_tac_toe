import { CornersResult } from "./interfaces/CornersResult";
import { PairsResult } from "./interfaces/PairsResult";

export const getTarget = (squares: NodeListOf<HTMLDivElement>, results: PairsResult | CornersResult): HTMLDivElement => {
    const targetIndex: number = results.targetSquareIndex!
    const targetSquare: HTMLDivElement = squares[targetIndex]
    return targetSquare
}