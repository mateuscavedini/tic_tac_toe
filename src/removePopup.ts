import { handleClasses } from "./handleClasses"

export const removePopup = (popup: HTMLDivElement): void => {
    handleClasses(popup, "translate", "add")
    setTimeout(() => popup.style.display = "none", 1000)
}