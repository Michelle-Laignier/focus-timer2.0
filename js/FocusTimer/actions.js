import * as timer from "./timer.js"

export function play() {
    timer.countdown()
    timer.toggleRunning()
}

export function pause () {
    timer.pause()
    timer.toggleRunning()
}

export function stop () {
    timer.StopAndReset()
}

export function plusTime () {
    timer.plusFiveMinutes()
}

export function lessTime () {
    timer.lessFiveMinutes()
}