


class Shape {
    constructor(fill) {
        this.fill = fill;
    }

    renderShape() {
        return `<circle cx="150" cy="150" r="80" fill="${fill}" />`
    }
  }

class Circle extends Shape {
    constructor(fill, radius) {
        super(fill);
        this.radius = radius;
    }
}

class Square extends Shape {
    constructor(params) {
        super(fill);
        this.params = params;
    }
}

class Triangle extends Shape {
    constructor(params) {
        super(fill);
        this.params = params;
    }
}