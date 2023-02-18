import { Div } from '../core/Div.js';
import { Draggable } from '../interactive/Draggable.js';
import { Iris } from '../utils/Iris.js';
import { Span } from '../core/Span.js';
import { VectorBox } from '../layout/VectorBox.js';
import { GRID_SIZE, RESIZERS } from '../constants.js';

const MIN_W = 200;
const MIN_H = 100;

const _color1 = new Iris();
const _color2 = new Iris();

class Node extends Div {

    #resizers = {};
    #snapToGrid = true;
    #color = new Iris();
    #style = {};
    #needsUpdate = true;

    constructor({
        width = 200,
        height = 150,
        x = 0,
        y = 0,
        color = 0x888888,
        resizers = [
            RESIZERS.TOP, RESIZERS.BOTTOM, RESIZERS.LEFT, RESIZERS.RIGHT,
            RESIZERS.TOP_LEFT, RESIZERS.TOP_RIGHT, RESIZERS.BOTTOM_LEFT, RESIZERS.BOTTOM_RIGHT,
        ],
        snapToGrid = true,
    } = {}) {
        super();
        const self = this;
        this.addClass('Node');

        // Enable mouse focus, needs >= 0 for keyboard focus
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#using_tabindex
        this.dom.setAttribute('tabindex', '-1');

        // Prototype
        this.isNode = true;

        // Properties
        this.#color.set(color);
        this.#snapToGrid = snapToGrid;

        // Children
        const background = new Div().addClass('NodeBackground');
        const panel = new Div().addClass('NodePanel');
        const border = new Div().addClass('NodeBorder');
        const sizers = new Div().addClass('NodeResizers');
        this.addToSelf(background, panel, border, sizers);
        this.contents = function() { return panel; }

        // Stacking
        this.dom.addEventListener('blur', () => self.removeClass('BringToTop'));
        this.dom.addEventListener('focusin', () => Draggable.bringToTop(self.dom));
        this.dom.addEventListener('displayed', () => Draggable.bringToTop(self.dom));
        this.dom.addEventListener('pointerdown', () => Draggable.bringToTop(self.dom));

        // Disable context menu
        function onContextMenu(event) { event.preventDefault(); }
        this.onContextMenu(onContextMenu);

        // Snapping
        function roundNearest(decimal, increment = GRID_SIZE) {
            if (! self.#snapToGrid) return decimal;
            return Math.ceil(decimal / increment) * increment;
        }

        // Resizers
        for (let key in RESIZERS) {
            const resizerName = RESIZERS[key];
            const className = `Resizer${resizerName}`;
            const resizer = new Div().addClass('Resizer').addClass(className);
            resizer.setPointerEvents('none');
            sizers.add(resizer);
            this.#resizers[resizerName] = resizer;
            let downX, downY;
            let rect = {};
            function onPointerDown(event) {
                if (! event.isPrimary) return;
                event.stopPropagation();
                event.preventDefault();
                selectNode();
                resizer.dom.setPointerCapture(event.pointerId);
                downX = event.pageX;
                downY = event.pageY;
                rect.left = self.left;
                rect.top = self.top;
                rect.width = self.width;
                rect.height = self.height;
                self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
            }
            function onPointerUp(event) {
                event.stopPropagation();
                event.preventDefault();
                resizer.dom.releasePointerCapture(event.pointerId);
                self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
                self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            }
            function onPointerMove(event) {
                event.stopPropagation();
                event.preventDefault();
                const scale = self.getScale();
                const diffX = (event.pageX - downX) * (1 / scale);
                const diffY = (event.pageY - downY) * (1 / scale);
                if (resizer.hasClassWithString('Left')) {
                    const newWidth = Math.max(roundNearest(rect.width - diffX), MIN_W);
                    const newLeft = rect.left + (rect.width - newWidth);
                    self.setStyle('left', `${newLeft}px`, 'width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Top')) {
                    const newHeight = Math.max(roundNearest(rect.height - diffY), MIN_H);
                    const newTop = rect.top + (rect.height - newHeight);
                    self.setStyle('top', `${newTop}px`, 'height', `${newHeight}px`);
                }
                if (resizer.hasClassWithString('Right')) {
                    const newWidth = Math.max(roundNearest(rect.width + diffX), MIN_W);
                    self.setStyle('width', `${newWidth}px`);
                }
                if (resizer.hasClassWithString('Bottom')) {
                    const newHeight = Math.max(roundNearest(rect.height + diffY), MIN_H);
                    self.setStyle('height', `${newHeight}px`);
                }
            }
            resizer.dom.addEventListener('pointerdown', onPointerDown);
            this.toggleResize(resizerName, resizers.includes(resizerName));
        }

        // Style Observer
        let styleTimeout = undefined;
        const observer = new MutationObserver(() => {
            self.#needsUpdate = true;
            clearTimeout(styleTimeout);
            styleTimeout = setTimeout(() => self.#updateSizes(), 50);
        });
        observer.observe(this.dom, { attributes: true, attributeFilter: [ 'style', 'class' ] });

        // Initial Size
        this.setStyle(
            'left', `${roundNearest(parseFloat(x))}px`,
            'top', `${roundNearest(parseFloat(y))}px`,
            'width', `${parseFloat(width)}px`,
            'height', `${parseFloat(height)}px`,
        );

        // Draggable
        Draggable.enable(self);

        // Selectable
        function selectNode() {
            Draggable.bringToTop(self.dom);
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => { if (el !== self.dom) el.classList.remove('NodeSelected'); });
            self.addClass('NodeSelected');
        }
        this.onPointerDown(selectNode);

        // Destroy
        this.dom.addEventListener('destroy', function() {
            if (observer) observer.disconnect();
        }, { once: true });
    }

    /******************** RECT */

    #updateSizes() {
        const computed = getComputedStyle(this.dom);
        const style = this.#style;
        style.left = parseFloat(computed.left);
        style.top = parseFloat(computed.top);
        style.width = parseFloat(computed.width);
        style.height = parseFloat(computed.height);
        style.right = style.left + style.width;
        style.bottom = style.top + style.height;
        style.zIndex = parseInt(computed.zIndex);
        this.#needsUpdate = false;
        if (this.parent && this.parent.isNodeGraph) this.parent.drawMiniMap();
    }

    get left()   { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.left; }
    get top()    { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.top; }
    get width()  { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.width; }
    get height() { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.height; }
    get right()  { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.right; }
    get bottom() { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.bottom; }
    get zIndex() { if (this.#needsUpdate) { this.#updateSizes(); } return this.#style.zIndex; }

    /******************** SCALE / SNAP / RESIZE */

    getScale() {
        return ((this.parent && this.parent.isNodeGraph) ? this.parent.getScale() : 1);
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
    }

    snapToGrid() {
        return this.#snapToGrid;
    }

    /** Turns a resizing handle on / off */
    toggleResize(resizerName, enable = true) {
        if (! resizerName) return;
        this.#resizers[resizerName].setPointerEvents((enable) ? 'auto' : 'none');
        return this;
    }

    /******************** NODE BUILDING */

    createHeader(text = '', iconUrl, addToContents = true) {
        if (this.header) return undefined;
        const header = new Div().setClass('NodeHeaderTitle');
        const icon = new VectorBox(iconUrl);
        header.iconHolder = new Span().setClass('NodeHeaderIcon').add(icon);
        header.textHolder = new Span().setClass('NodeHeaderText').setTextContent(text);
        const boxShadow = new Div().setClass('NodeHeaderBoxShadow');
        header.add(header.iconHolder, header.textHolder, boxShadow);
        if (addToContents) this.add(header);
        this.header = header;
        this.applyColor();
        return header;
    }

    /******************** STYLING */

    applyColor(color) {
        if (color !== undefined) this.#color.set(color);
        const colorLight = _color2.set(this.#color).darken(1.3).rgbString();
        const colorDark = _color1.set(this.#color).darken(0.7).rgbString();
        if (this.header) this.header.setStyle('background-image', `linear-gradient(to bottom, rgba(${colorLight}, 0.75), rgba(${colorDark}, 0.75))`);
    }

    colorString() {
        return this.#color.cssString();
    }

}

export { Node };
