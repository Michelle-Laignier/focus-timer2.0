import state from "./state.js"
import * as elements from "./elements.js"
console.log(state);

let timerCountdown
export function contdown () {
    if(state.minutes <= 0 && state.seconds <= 0) {
        state.minutes = 0
        state.seconds = 0
        return
    }
    
    if(state.seconds === 0) {
        state.seconds = 60
        state.minutes--
    }
    state.seconds--
    elements.seconds.textContent = String(state.seconds).padStart(2, "0")
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
    
    timerCountdown = setTimeout(() => contdown(), 1000)
}

export function toggleRunning () {
    state.isRunning = !state.isRunning
}

export function stop () {
    clearTimeout(timerCountdown)
}

export function plusFiveMinutes () {
    if(state.minutes >= 100) {
        state.minutes = 100
        return
    }
    state.minutes = state.minutes + 5
    state.seconds = 0
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
}

export function lessFiveMinutes () {
    if(state.minutes <= 0) {
        state.minutes = 0
        return
    }
    state.minutes = state.minutes - 5
    state.seconds = 0
    elements.minutes.textContent = String(state.minutes).padStart(2, "0")
}