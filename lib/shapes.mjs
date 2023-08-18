


export class Shape {
    constructor(fill, textFill, text) {
        this.fill = fill;
        this.textFill = textFill;
        this.text = text;
    }

    
    setColor(color) {
        this.fill = color;
        return this.fill;
    }

    setText(string) {
        this.text = string;
        return this.text;
    }

    setTextColor(textColor) {
        this.textFill = textColor;
        return this.textFill;
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

export class Circle extends Shape {
    constructor(fill, radius, shapeType, textCoords) {
        super(fill);
        this.radius = radius;
        this.shapeType = 'circle cx="150" cy="100" r="80"';
        this.textCoords = 'x="150" y="120"';
    }

}

export class Square extends Shape {
    constructor(fill, shapeType, textCoords) {
        super(fill);
        this.shapeType = 'rect x="10" y="10" width="150" height="150" ';
        this.textCoords = 'x="85" y="100"';
    }
    
}

export class Triangle extends Shape {
    constructor(fill, shapeType, textCoords) {
        super(fill);
        this.shapeType = 'polygon points="150, 18 244, 182 56, 182"'
        this.textCoords = 'x="150" y="170"';
    }

}


// let shape = new Circle();
// shape.setColor('blue');
// shape.setTextColor('red');
// console.log(shape.renderHTML());