import { enableScreen } from "./enableScreen"
import { playerSelector } from "./playerSelector"

export const clickHandler = (disabledElements: NodeListOf<HTMLDivElement>, popup: HTMLDivElement, e: Event): void => {
    const target = e.target as HTMLInputElement

    enableScreen(disabledElements, popup)
    playerSelector(target)
}