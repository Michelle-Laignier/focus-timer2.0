import { controls } from "./elements.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"


export function registerControls () {
    controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action
        if(action == undefined) {
            return
        }
        console.log(action);
    })
}

elements.buttonPlay.addEventListener("click", timer.contdown)
elements.buttonPlay.addEventListener("click", timer.toggleRunning)
elements.buttonStop.addEventListener("click", timer.stop)
elements.buttonPlus.addEventListener("click", timer.plusFiveMinutes)
elements.buttonLess.addEventListener("click", timer.lessFiveMinutes)