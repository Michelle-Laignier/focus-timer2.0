import * as sounds from "./sounds.js"
import * as elements from "../FocusTimer/elements.js"

function forest (sound) {
    sound == elements.forest ? sounds.forestAudio.play() : sounds.forestAudio.pause() 
    || sound == elements.volumeForest ? sounds.forestAudio.play() : sounds.forestAudio.pause() 
    || sound == elements.svgForest ? sounds.forestAudio.play() : sounds.forestAudio.pause()
}

function rain (sound) {
    sound == elements.rain ? sounds.rainAudio.play() : sounds.rainAudio.pause() 
    || sound == elements.volumeRain ? sounds.rainAudio.play() : sounds.rainAudio.pause() 
    || sound == elements.svgRain ? sounds.rainAudio.play() : sounds.rainAudio.pause()
}

function restaurant (sound) {
    sound == elements.restaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause() 
    || sound == elements.volumeRestaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause() 
    || sound == elements.svgRestaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause()
}

function campFire (sound) {
    sound == elements.campFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause() 
    || sound == elements.volumeFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause() 
    || sound == elements.svgFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause()
}

export { forest, rain, restaurant, campFire }