import * as sounds from "./sounds.js"
import * as elements from "../FocusTimer/elements.js"

function forest (sound) {
    sound == elements.forest ? sounds.forestAudio.play() : sounds.forestAudio.pause() 
    || sound == elements.volumeForest ? sounds.forestAudio.play() : sounds.forestAudio.pause() 
    || sound == elements.svgForest ? sounds.forestAudio.play() : sounds.forestAudio.pause()

    // Aqui a gente valida se já está tocando e pausa se estiver:
    if(sound == elements.forest || sound == elements.svgForest){
        if(sound.classList.contains('playing')) {
            sounds.forestAudio.pause() 
            return
        }
    }  
}

function rain (sound) {
    sound == elements.rain ? sounds.rainAudio.play() : sounds.rainAudio.pause() 
    || sound == elements.volumeRain ? sounds.rainAudio.play() : sounds.rainAudio.pause() 
    || sound == elements.svgRain ? sounds.rainAudio.play() : sounds.rainAudio.pause()

    if(sound == elements.rain || sound == elements.svgRain){
        if(sound.classList.contains('playing')) {
            sounds.rainAudio.pause() 
            return
        }
    }  
}

function restaurant (sound) {
    sound == elements.restaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause() 
    || sound == elements.volumeRestaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause() 
    || sound == elements.svgRestaurant ? sounds.restaurantAudio.play() : sounds.restaurantAudio.pause()

    if(sound == elements.restaurant || sound == elements.svgRestaurant){
        if(sound.classList.contains('playing')) {
            sounds.restaurantAudio.pause() 
            return
        }
    }  
}

function campFire (sound) {
    sound == elements.campFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause() 
    || sound == elements.volumeFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause() 
    || sound == elements.svgFire ? sounds.campfireAudio.play() : sounds.campfireAudio.pause()

    if(sound == elements.campFire || sound == elements.svgFire){
        if(sound.classList.contains('playing')) {
            sounds.campfireAudio.pause() 
            return
        }
    }  
}

export { forest, rain, restaurant, campFire }