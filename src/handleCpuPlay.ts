import { addToken } from "./addToken";
import { getEmptyTarget } from "./getEmptyTarget";
import { getTarget } from "./getTarget";
import { cpu } from "./globals";
import { CornersResult } from "./interfaces/CornersResult";
import { PairsResult } from "./interfaces/PairsResult";

export const handleCpuPlay = (squares: NodeListOf<HTMLDivElement>, results?: PairsResult | CornersResult): void => {
    let target: HTMLDivElement

    if (results) {
        target = getTarget(squares, results)
    } else {
        target = getEmptyTarget(squares)
    }
    addToken(target, cpu)
}