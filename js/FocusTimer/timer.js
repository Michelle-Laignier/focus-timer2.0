import state from "./state.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

let timerCountdown
export function countdown () {
    if(state.minutes <= 0 && state.seconds <= 0) {
        state.minutes = 0
        state.seconds = 0
        toggleRunning()
        sounds.buttonKitchenTimer.play()
        return
    }
    
    if(state.seconds === 0) {
        state.seconds = 60
        state.minutes--
    }
    state.seconds--
    elements.seconds.textContent = String(state.seconds).padStart(2, "0")
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
    
    timerCountdown = setTimeout(() => countdown(), 1000)
}

export function toggleRunning () {
    elements.buttonPlay.classList.toggle("hide")
    elements.buttonPause.classList.toggle("hide")
}

export function pause () {
    clearTimeout(timerCountdown)
} 

export function StopAndReset () {
    location.reload()
    //pause()
    /*atualiza só depois que clico no play
    state.minutes = 25
    state.seconds = 0*/
    //elements.buttonPlay.classList.remove("hide")
    //elements.buttonPause.classList.add("hide")
}

export function plusFiveMinutes () {
    if(state.minutes >= 100) {
        state.minutes = 100
        return
    }
    state.minutes = state.minutes + 5
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
}

export function lessFiveMinutes () {
    if(state.minutes <= 0) {
        state.minutes = 0
        return
    }
    state.minutes = state.minutes - 5
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
}