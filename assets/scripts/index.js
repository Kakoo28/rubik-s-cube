const COLORS = {
    w: "white",
    r: "red",
    b: "blue",
    o: "orange",
    g: "green",
    y: "yellow"
};
const COLORS_LETTER = ["w", "r", "b", "o", "g", "y"];
const cube = new Cube();


cube.displayCube();

// ADDEVENTLISTENER

const BUTTONS = Array.from(document.querySelectorAll('.btn'));
const RESET = document.getElementById('reset-btn');

BUTTONS.forEach((btn) => btn.addEventListener("click", (e) => {
    const ID = e.target.id.split("");
    cube.rotate(ID[0].toLowerCase(), ID[1] === 'r');
}));
RESET.addEventListener("click", () => cube.reset());

// add key down listener
window.addEventListener("keydown", (e) => {
    if (COLORS_LETTER.includes(e.key.toLowerCase())) {
        cube.rotate(e.key.toLowerCase(), e.shiftKey);
    }
});