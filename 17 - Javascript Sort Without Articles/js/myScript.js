const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const eBands = document.getElementById("bands");

function strip (bandName) {
    return bandName.replace(/^(a |an |the )/i,"").trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);


eBands.innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join("");
