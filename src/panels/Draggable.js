/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Osui
// @about       Lightweight JavaScript UI library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/scidian/osui
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Css } from '../Css.js';
import { Div } from '../core/Div.js';
import { Panel } from './Panel.js';

import { CLOSE_SIDES } from './Panel.js';

class Draggable extends Panel {

    constructor(style) {
        super(style, CLOSE_SIDES.LEFT);
        this.addClass('Draggable');

        // function onPointerDown(event) {
        //     if (event.isPrimary === false) return;
        //     this.downX = event.clientX;
        //     this.downY = event.clientY;
        //     this.downW = this.parent.getWidth();
        //     this.downH = this.parent.getHeight();
        //     this.dom.ownerDocument.addEventListener('pointermove', this._onPointerMove, false);
        //     this.dom.ownerDocument.addEventListener('pointerup', this._onPointerUp, false);
        // }

    }

}

export { Draggable };
