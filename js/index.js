const images = [
    { alt: "on", src: "../img/on.png" },
    { alt: "off", src: "../img/off.png" }
]

const lamp = document.querySelector('.lamp');
const body = document.querySelector('body');
const image = document.querySelector('.lamp-image');
const textTitle = document.querySelector(".text-title");
const textLamp = document.querySelector(".text-lamp");
const textDescript = document.querySelector(".text-descript");

// const markup = images.map(image => `<img class="lamp-img" src="${image.url}" alt="${image.alt}" with="150">`).join("");

lamp.addEventListener('click', (event) => {
    event.preventDefault();
    if (lamp.id === "on") {
        lamp.id = "off";
        image.src = "./img/off.png";
        body.style.color = "white";
        body.style.backgroundColor = "black";
        textTitle.textContent = "Lamp is off";
        textLamp.textContent = "Turn on the lamp.";
        textDescript.textContent = "It`s dark here @_@";
    } else if (lamp.id === "off") {
        lamp.id = "on";
        image.src = "./img/on.png";
        body.style.color = "black";
        body.style.backgroundColor = "wheat"
        textTitle.textContent = "Lamp is on";
        textLamp.textContent = "Turn off the lamp.";
        textDescript.textContent = "It`s light here ^_^";
    }
})

