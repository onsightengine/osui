import { Div } from '../core/Div.js';
import { VectorBox } from './VectorBox.js';

/** Box to hold an Image or Vector, centers image and applies drop shadow */
class ShadowBox extends Div {

    constructor(/* any number of ImageUrls to add */) {
        super();
        this.setClass('ShadowBox');

        // Parse Arguments, Add Osui Elements / ImageUrls
        let args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) args = arguments[0];
        for (let i = 0; i < args.length; i++) {
            let argument = args[i];
            if (argument !== undefined && argument.isElement === true) {
                this.add(argument);
            } else {
                this.add(new VectorBox(argument));
            }
        }

    } // end ctor

    noShadow() {
        this.addClass('NoShadow');
        return this;
    }

}

export { ShadowBox };
