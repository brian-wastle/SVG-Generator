import {Shape, Circle, Triangle, Square} from './shapes.mjs';

describe('Shape', () => {
    
    describe('setColor', () => {
        it('if we pass a color, it should return this.fill as that color ', () => {
            const newShape = new Shape;
            expect(newShape.setColor('red')).toEqual('red');
        });
    });

    describe('setText', () => {
        it('if we pass a string, it should return this.text as that string ', () => {
            const newShape = new Shape();
            expect(newShape.setText('HHH')).toEqual('HHH');
        });
    });

    describe('setTextColor', () => {
        it('if we pass a text color, it should return this.textFill as that text color ', () => {
            const newShape = new Shape();
            expect(newShape.setTextColor('blue')).toEqual('blue');
        });
    });

    describe('renderHTML', () => {
        it('if you call renderHTML, it should return the HTML block for the SVG file with the shapes HTML code, the text coordinates, fill, and text string included', () => {
            const newShape = new Circle;
            newShape.setColor("Blue");
            newShape.setText('YYY')
            newShape.setTextColor('Red')
            newShape.render();
            expect(newShape.renderHTML()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="Blue" />

<text x="150" y="120" font-size="60" text-anchor="middle" fill="Red">YYY</text>

</svg>`);
        });
    });

});

describe('Circle', () => {
    
    describe('render', () => {
        it('if we call render, it should return the HTML for that shape with the fill color specified ', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
});

describe('Square', () => {
    
    describe('render', () => {
        it('if we call render, it should return the HTML for that shape with the fill color specified ', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="150" height="150"  fill="blue" />');
        });
    });
});

describe('Triangle', () => {
    
    describe('render', () => {
        it('if we call render, it should return the HTML for that shape with the fill color specified ', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});