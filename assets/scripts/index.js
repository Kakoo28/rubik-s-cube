const COLORS = {
    w: "white",
    r: "red",
    b: "blue",
    o: "orange",
    g: "green",
    y: "yellow"
};
console.log(Object.keys(COLORS));

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
    console.log(cube.rotate(e.key.toLowerCase(), e.shiftKey));
});