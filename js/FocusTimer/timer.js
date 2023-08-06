import state from "./state.js"
import * as elements from "./elements.js"
import * as sounds from "../sounds/sounds.js"

let timerCountdown
let seconds = elements.seconds
let minutes = elements.minutes
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
    seconds.textContent = String(state.seconds).padStart(2, "0")
    minutes.textContent = String(state.minutes).padStart(2, "0")
    
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
    pause()
    state.minutes = 25
    state.seconds = 0
    minutes.textContent = state.minutes
    seconds.textContent = String(state.seconds).padStart(2, "0")
    elements.buttonPlay.classList.remove("hide")
    elements.buttonPause.classList.add("hide")
}

export function plusFiveMinutes () {
    if(state.minutes >= 100) {
        state.minutes = 100
        return
    }
    state.minutes = state.minutes + 5
    minutes.textContent = String(state.minutes).padStart(2, "0")
}

export function lessFiveMinutes () {
    if(state.minutes <= 0 || state.minutes < 5) {
        state.minutes = 0 // pra não ficar -1 min
        state.seconds = 1
        return
    }
    state.minutes = state.minutes - 5
    minutes.textContent = String(state.minutes).padStart(2, "0")
}