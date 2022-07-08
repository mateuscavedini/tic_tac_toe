import { handleClasses } from "./handleClasses"
import { removePopup } from "./removePopup"

export const enableScreen = (disabledElements: NodeListOf<HTMLDivElement>, popup: HTMLDivElement): void => {
    disabledElements.forEach(element => {
        handleClasses(element, "disabled", "remove")
        handleClasses(element, "enabled", "add")
    })

    removePopup(popup)
}