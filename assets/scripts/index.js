const COLORS = {
    w: "white",
    r: "red",
    b: "blue",
    o: "orange",
    g: "green",
    y: "yellow"
};

const cube = new Cube(COLORS);

cube.displayCube();

// ADDEVENTLISTENER

const BUTTONS = Array.from(document.querySelectorAll('.btn'));
const RESET = document.getElementById('reset-btn');
const SCRAMBLE = document.getElementById('scramble-btn');

BUTTONS.forEach((btn) => btn.addEventListener("click", (e) => {
    const ID = e.target.id.split("");
    cube.rotate(ID[0].toLowerCase(), ID[1] === 'r');
}));
RESET.addEventListener("click", () => cube.reset());
SCRAMBLE.addEventListener('click', () => cube.scramble());

// add key down listener
window.addEventListener("keydown", (e) => {
    console.log(cube.rotate(e.key.toLowerCase(), e.shiftKey));
});