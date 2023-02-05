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
                if (!reverse) {
                    // white
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
                } else {
                    // reversed white
                    copyState.w[0] = this.state.w[2];
                    copyState.w[2] = this.state.w[7];
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
                }
                break;
            case "r":
                if (!reverse) {
                    // red
                    copyState.r[0] = this.state.r[5];
                    copyState.r[2] = this.state.r[0];
                    copyState.r[5] = this.state.r[7];
                    copyState.r[7] = this.state.r[2];
                    copyState.r[1] = this.state.r[3];
                    copyState.r[3] = this.state.r[6];
                    copyState.r[4] = this.state.r[1];
                    copyState.r[6] = this.state.r[4];

                    copyState.y[0] = this.state.b[0];
                    copyState.y[1] = this.state.b[3];
                    copyState.y[2] = this.state.b[5];

                    copyState.b[0] = this.state.w[7];
                    copyState.b[3] = this.state.w[6];
                    copyState.b[5] = this.state.w[5];

                    copyState.w[7] = this.state.g[2];
                    copyState.w[6] = this.state.g[4];
                    copyState.w[5] = this.state.g[7];

                    copyState.g[2] = this.state.y[0];
                    copyState.g[4] = this.state.y[1];
                    copyState.g[7] = this.state.y[2];
                } else {
                    // red reverse
                    copyState.r[0] = this.state.r[2];
                    copyState.r[2] = this.state.r[7];
                    copyState.r[5] = this.state.r[0];
                    copyState.r[7] = this.state.r[5];
                    copyState.r[1] = this.state.r[4];
                    copyState.r[3] = this.state.r[1];
                    copyState.r[4] = this.state.r[6];
                    copyState.r[6] = this.state.r[3];

                    copyState.y[0] = this.state.g[2];
                    copyState.y[1] = this.state.g[4];
                    copyState.y[2] = this.state.g[7];

                    copyState.b[0] = this.state.y[0];
                    copyState.b[3] = this.state.y[1];
                    copyState.b[5] = this.state.y[2];

                    copyState.w[7] = this.state.b[0];
                    copyState.w[6] = this.state.b[3];
                    copyState.w[5] = this.state.b[5];

                    copyState.g[2] = this.state.w[7];
                    copyState.g[4] = this.state.w[6];
                    copyState.g[7] = this.state.w[5];
                }
                break;
            case "o":
                if (!reverse) {


                } else {

                }
                break;
            case "b":
                if (!reverse) {


                } else {

                }
                break;
            case "g":
                if (!reverse) {


                } else {

                }
                break;
            case "y":
                if (!reverse) {


                } else {

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