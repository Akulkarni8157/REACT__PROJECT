import addition from './addition';
import substraction from './substraction';
import multiplication from './multiplication';
import division from './division';

const calculator = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return addition(a, b);
        case 'subtract':
            return substraction(a, b);
        case 'multiply':
            return multiplication(a, b);
        case 'divide':
            return division(a, b);
        default:
            return "Invalid operation";
    }
};

export default calculator;
