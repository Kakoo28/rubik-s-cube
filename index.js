const COLORS = {
    w: "white",
    r: "red",
    b: "blue",
    o: "orange",
    g: "green",
    y: "yellow"
};
const CUBE_DOM = document.getElementById('cube')
const CUBE = new Cube(CUBE_DOM);


CUBE.displayCube();