class Cube {
    constructor(cube) {
        this.state = {
            w: ["w", "w", "w", "w", "w", "w", "w", "w"],
            r: ["r", "r", "r", "r", "r", "r", "r", "r"],
            b: ["b", "b", "b", "b", "b", "b", "b", "b"],
            o: ["o", "o", "o", "o", "o", "o", "o", "o"],
            g: ["g", "g", "g", "g", "g", "g", "g", "g"],
            y: ["y", "y", "y", "y", "y", "y", "y", "y"]
        }
        this.cube = cube;

        for (const face in this.state) {
            document.querySelector(`#${face} .center`).style.backgroundColor = COLORS[face];
        }
    }

    displayCube() {
        for (const face in this.state) {
            for (let i = 1; i <= this.state[face].length; i++) {
                [...document.getElementById(face).getElementsByClassName(i)][0].style.backgroundColor = COLORS[this.state[face][i-1]];
            }
        }
    }

    rotate(face, reverse) {

    }
}