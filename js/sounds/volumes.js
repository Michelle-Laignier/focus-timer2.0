import * as elements from "../FocusTimer/elements.js"
import * as sounds from "./sounds.js"

export function forest () {
    // Obtenha o controle deslizante de volume e configure o valor inicial
    const volumeForestInput = elements.volumeForest;
    sounds.forestAudio.volume = volumeForestInput.value / 100;

    // Adicione um ouvinte de evento para o controle deslizante
    volumeForestInput.addEventListener("input", function() {
    const selectedVolume = volumeForestInput.value;

    // Ajuste o volume do elemento de áudio
    sounds.forestAudio.volume = selectedVolume / 100;
    })
}

export function rain () {
    const volumeInput = elements.volumeRain
    sounds.rainAudio.volume = volumeInput.value / 100;

    volumeInput.addEventListener("input", function() {
    const selectedVolume = volumeInput.value;
    sounds.rainAudio.volume = selectedVolume / 100;
    })
}

export function restaurant () {
    const volumeInput = elements.volumeRestaurant
    sounds.restaurantAudio.volume = volumeInput.value / 100;

    volumeInput.addEventListener("input", function() {
    const selectedVolume = volumeInput.value;
    sounds.restaurantAudio.volume = selectedVolume / 100;
    })
}

export function campFire () {
    const volumeInput = elements.volumeFire
    sounds.campfireAudio.volume = volumeInput.value / 100;

    volumeInput.addEventListener("input", function() {
    const selectedVolume = volumeInput.value;
    sounds.campfireAudio.volume = selectedVolume / 100;
    })
}