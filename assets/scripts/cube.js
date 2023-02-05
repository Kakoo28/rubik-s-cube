class Cube {
    constructor() {
        this.state = {
            w: ["w", "w", "w", "w", "w", "w", "w", "w"],
            r: ["r", "r", "r", "r", "r", "r", "r", "r"],
            b: ["b", "b", "b", "b", "b", "b", "b", "b"],
            o: ["o", "o", "o", "o", "o", "o", "o", "o"],
            g: ["g", "g", "g", "g", "g", "g", "g", "g"],
            y: ["y", "y", "y", "y", "y", "y", "y", "y"]
        }
        this.defaultState = this.state;
        for (const face in this.state) {
            document.querySelector(`#${face} .center`).style.backgroundColor = COLORS[face];
        }
    }

    displayCube() {
        for (const face in this.state) {
            for (let i = 0; i < this.state[face].length; i++) {
                [...document.getElementById(face).getElementsByClassName(i)][0].style.backgroundColor = COLORS[this.state[face][i]];
            }
        }
    }

    reset() {
        this.state = this.defaultState;
        this.displayCube();
    }

    rotate(face, reverse) {
        // REMOVE THE LINK WITH COPY STATE AND THIS.STATE
        let copyState = JSON.stringify(this.state);
        copyState = JSON.parse(copyState);
        // methode plus simple?

        switch (face) {
            case "w":
                if (reverse) {
                    // reversed white
                    copyState.w[0] = this.state.w[2];
                    copyState.w[2] = this.state.w[0];
                    copyState.w[5] = this.state.w[0];
                    copyState.w[7] = this.state.w[5];
                    copyState.w[1] = this.state.w[4];
                    copyState.w[3] = this.state.w[1];
                    copyState.w[4] = this.state.w[6];
                    copyState.w[6] = this.state.w[3];

                    copyState.r[0] = this.state.g[0];
                    copyState.r[1] = this.state.g[1];
                    copyState.r[2] = this.state.g[2];

                    copyState.b[0] = this.state.r[0];
                    copyState.b[1] = this.state.r[1];
                    copyState.b[2] = this.state.r[2];

                    copyState.o[0] = this.state.b[0];
                    copyState.o[1] = this.state.b[1];
                    copyState.o[2] = this.state.b[2];

                    copyState.g[0] = this.state.o[0];
                    copyState.g[1] = this.state.o[1];
                    copyState.g[2] = this.state.o[2];
                } else {
                    copyState.w[0] = this.state.w[5];
                    copyState.w[2] = this.state.w[0];
                    copyState.w[5] = this.state.w[7];
                    copyState.w[7] = this.state.w[2];

                    copyState.w[1] = this.state.w[3];
                    copyState.w[3] = this.state.w[6];
                    copyState.w[4] = this.state.w[1];
                    copyState.w[6] = this.state.w[4];

                    copyState.r[0] = this.state.b[0];
                    copyState.r[1] = this.state.b[1];
                    copyState.r[2] = this.state.b[2];

                    copyState.b[0] = this.state.o[0];
                    copyState.b[1] = this.state.o[1];
                    copyState.b[2] = this.state.o[2];

                    copyState.o[0] = this.state.g[0];
                    copyState.o[1] = this.state.g[1];
                    copyState.o[2] = this.state.g[2];

                    copyState.g[0] = this.state.r[0];
                    copyState.g[1] = this.state.r[1];
                    copyState.g[2] = this.state.r[2];
                }
                break;
            case "r":
                if (reverse) {
                    console.log("R reversed");
                } else {
                    console.log("R");
                }
                break;
            case "o":
                if (reverse) {
                    console.log("O reversed");
                } else {
                    console.log("O");
                }
                break;
            case "b":
                if (reverse) {
                    console.log("B reversed");
                } else {
                    console.log("B");
                }
                break;
            case "g":
                if (reverse) {
                    console.log("G reversed");
                } else {
                    console.log("G");
                }
                break;
            case "y":
                if (reverse) {
                    console.log("Y reversed");
                } else {
                    console.log("Y");
                }
                break;
            default:
                return false;
                break;
        }
        this.state = copyState;
        this.displayCube();
    }
}