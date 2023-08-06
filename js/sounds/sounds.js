import * as elements from "../FocusTimer/elements.js"
import * as volumes from "./volumes.js"
import * as addSounds from "./addSounds.js"
import * as focus from "./cardsFocus.js"

export const buttonPressAudio = new Audio("./audio/button-press.wav")
export const buttonKitchenTimer = new Audio("./audio/kitchen-timer.mp3")

export const forestAudio = new Audio("./audio/forest.mp3")
export const rainAudio = new Audio("./audio/rain.mp3")
export const restaurantAudio = new Audio("./audio/restaurant.mp3")
export const campfireAudio = new Audio("./audio/campfire.mp3")

forestAudio.loop = true
rainAudio.loop = true
restaurantAudio.loop = true
campfireAudio.loop = true

elements.soundsCards.addEventListener("click", (event) => {
    const sound = event.target
    addSounds.forest(sound)
    addSounds.rain(sound)
    addSounds.restaurant(sound)
    addSounds.campFire(sound)

    volumes.forest()
    volumes.rain()
    volumes.restaurant()
    volumes.campFire()

    // pro card ficarem com o focus ativado quando clicar fora dele (se tiver som)
    focus.forestFocusAndHoverActive(sound)
    focus.rainFocusAndHoverActive(sound)
    focus.restaurantFocusAndHoverActive(sound)
    focus.fireFocusAndHoverActive(sound)
})