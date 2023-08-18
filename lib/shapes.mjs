


class Shape {
    constructor(fill, textFill, text) {
        this.fill = fill;
        this.textFill = textFill;
        this.text = text;
    }

    
    setColor(color) {
        this.fill = color;
    }

    setText(string) {
        this.text = string;
    }

    setTextColor(textColor) {
        this.textFill = textColor;
    }

    render() {
        return `<${this.shapeType} fill="${this.fill}" />`;
    }

    renderHTML() {
        return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${this.render()}

<text ${this.textCoords} font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>

</svg>`;

    }


  }

class Circle extends Shape {
    constructor(fill, radius, shapeType, textCoords) {
        super(fill);
        this.radius = radius;
        this.shapeType = 'circle cx="150" cy="150" r="80"';
        this.textCoords = 'x="150" y="170"';
    }

}

class Square extends Shape {
    constructor(fill, shapeType, textCoords) {
        super(fill);
        this.shapeType = 'rect width="100%" height="100%"';
        this.textCoords = 'x="150" y="170"';
    }
    
}

class Triangle extends Shape {
    constructor(fill, shapeType, textCoords) {
        super(fill);
        this.shapeType = 'polygon points="150, 18 244, 182 56, 182"'
        this.textCoords = 'x="150" y="155"';
    }

}

module.exports = {Circle, Triangle, Square};
// module.exports = Circle;
// module.exports = Square;
// module.exports = Triangle;

// let shape = new Circle();
// shape.setColor('blue');
// shape.setTextColor('red');
// console.log(shape.renderHTML());