import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function genratePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }

    for (let level of levels) {
        newPalette.color[level] = [];
    }

    for (let color of newPalette.colors) {

    }
}

function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ]
}

function genrateScale(hexColor, numOfColor) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numOfColor);
}