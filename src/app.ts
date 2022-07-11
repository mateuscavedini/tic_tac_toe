import { clickHandler } from "./clickHandler"
import { disabledElements, popup, selectO, selectX } from "./globals"

selectX.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))
selectO.addEventListener("click", (e) => clickHandler(disabledElements, popup, e))