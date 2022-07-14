import { cpuFirstMove } from "./cpuFirstMove"
import { enableScreen } from "./enableScreen"
import { playerSelector } from "./playerSelector"

export const handleBeggining = (squares: NodeListOf<HTMLDivElement>, disabledElements: NodeListOf<HTMLDivElement>, popup: HTMLDivElement, e: Event): void => {
    const target = e.target as HTMLDivElement

    enableScreen(disabledElements, popup)
    playerSelector(target)
    cpuFirstMove(squares)
}