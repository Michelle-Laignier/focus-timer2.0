import * as sounds from "./sounds.js"
import * as elements from "../FocusTimer/elements.js"

export function forestFocusAndHoverActive (sound) {
    elements.forest.classList.add("card-focus")
    elements.pathForest.setAttribute("style", "fill: white;")
    elements.volumeForest.setAttribute("style", "background-color: white;")
    
    if(sound != elements.forest && sound != elements.svgForest) { 
        elements.forest.classList.remove("card-focus")
        elements.pathForest.removeAttribute("style")
        elements.volumeForest.removeAttribute("style")
    }
}

export function rainFocusAndHoverActive (sound) {
    elements.rain.classList.add("card-focus")
    elements.pathRain.setAttribute("style", "fill: white;")
    elements.volumeRain.setAttribute("style", "background-color: white;")

    if(sound != elements.rain && sound != elements.svgRain) { 
        elements.rain.classList.remove("card-focus")
        elements.pathRain.removeAttribute("style")
        elements.volumeRain.removeAttribute("style")
    }
}

export function restaurantFocusAndHoverActive (sound) {
    elements.restaurant.classList.add("card-focus")
    elements.pathRestaurant.setAttribute("style", "fill: white;")
    elements.volumeRestaurant.setAttribute("style", "background-color: white;")

    if(sound != elements.restaurant && sound != elements.svgRestaurant) { 
        elements.restaurant.classList.remove("card-focus")
        elements.pathRestaurant.removeAttribute("style")
        elements.volumeRestaurant.removeAttribute("style")
    }
}

export function fireFocusAndHoverActive (sound) {
    elements.campFire.classList.add("card-focus")
    elements.pathFire.setAttribute("style", "fill: white;")
    elements.volumeFire.setAttribute("style", "background-color: white;")

    if(sound != elements.campFire && sound != elements.svgFire) { 
        elements.campFire.classList.remove("card-focus")
        elements.pathFire.removeAttribute("style")
        elements.volumeFire.removeAttribute("style")
    }
}