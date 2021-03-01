class Color {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }
    hex() {
        return rgbToHex(this.r, this.g, this.b)
    }
}
