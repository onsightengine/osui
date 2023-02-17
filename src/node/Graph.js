import { Canvas } from '../core/Canvas.js';
import { Div } from '../core/Div.js';
import { Panel } from '../panels/Panel.js';
import { GRID_SIZE } from '../constants.js';

class Graph extends Panel {

    #scale = 1;
    #snapToGrid = true;
    #offsetX = 0;
    #offsetY = 0;

    constructor() {
        super();
        const self = this;

        // Elements
        this.input = new Div().setClass('GraphInput');
        this.grid = new Div().setClass('GraphGrid');
		this.nodes = new Div().setClass('GraphNodes');
        this.lines = new Canvas().setClass('GraphLines');
        this.minimap = new Canvas().setClass('MiniMap');
        this.add(this.input, this.grid, this.nodes, this.lines, this.minimap);

        // Grid
        const SIZE = GRID_SIZE * 4;
        const HALF = SIZE / 2;
        const BORDER = 2;
        const B2 = BORDER * 2;
        const squares = new Canvas(SIZE, SIZE);
        squares.ctx.clearRect(0, 0, squares.width, squares.height);
        squares.ctx.fillStyle = 'rgb(255, 255, 255)';
        squares.ctx.globalAlpha = 0.04;
        squares.ctx.fillRect(0 + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
        squares.ctx.fillRect(HALF + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
        squares.ctx.globalAlpha = 0.02;
        squares.ctx.fillRect(HALF + BORDER, 0 + BORDER, HALF - B2, HALF - B2);
        squares.ctx.fillRect(0 + BORDER, HALF + BORDER, HALF - B2, HALF - B2);
        this.grid.setStyle('background-image', `url('${squares.dom.toDataURL()}')`);
        this.grid.setStyle('background-size', `${(GRID_SIZE * this.#scale * 2)}px`);

        // Scale Getter
        this.nodes.getScale = function() { return self.#scale; };

        // Zoom
        function onMouseZoom(event) {
            if (event) {
                event.preventDefault();
                const delta = (event.deltaY * 0.002);
                self.zoomTo(self.#scale - delta, event.clientX, event.clientY);
            }
            self.grid.setStyle('background-size', `${(GRID_SIZE * self.#scale * 2)}px`);
            self.grid.setStyle('opacity', (self.#scale < 1) ? (self.#scale * self.#scale) : '1');
		};
        this.onWheel(onMouseZoom);

        // Window Resize
        function onWindowResize() {
            self.zoomTo(self.#scale);
        }
        window.addEventListener('resize', onWindowResize);

        // Keys
        let grabbing = false;
        let spaceKey = false;
        function onKeyDown(event) {
            if (event.code === 'Space') {
                spaceKey = true;
                self.dom.style.cursor = (grabbing) ? 'grabbing' : 'grab';
                self.input.setStyle('z-index', '100');
            }
        }
        function onKeyUp(event) {
            if (event.code === 'Space') {
                spaceKey = false;
                self.dom.style.cursor = 'auto';
                self.input.setStyle('z-index', '-1');
            }
        }
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        // Translate
        let downX, downY;
        let offx, offy;
        function onPointerDown(event) {
            const panels = document.querySelectorAll(`.NodeSelected`);
            panels.forEach(el => el.classList.remove('NodeSelected'));
            if (event.button === 0 && ! spaceKey) return;
            event.stopPropagation();
            event.preventDefault();
            self.dom.setPointerCapture(event.pointerId);
            grabbing = true;
            downX = event.pageX;
            downY = event.pageY;
            offx = self.#offsetX;
            offy = self.#offsetY;
            self.dom.ownerDocument.addEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.addEventListener('pointerup', onPointerUp);
            self.dom.style.cursor = 'grabbing';
        }
        function onPointerUp(event) {
            event.stopPropagation();
            event.preventDefault();
            self.dom.releasePointerCapture(event.pointerId);
            grabbing = false;
            self.dom.ownerDocument.removeEventListener('pointermove', onPointerMove);
            self.dom.ownerDocument.removeEventListener('pointerup', onPointerUp);
            self.dom.style.cursor = (spaceKey) ? 'grab' : 'auto';
        }
        function onPointerMove(event) {
            event.stopPropagation();
            event.preventDefault();
            const diffX = (event.pageX - downX) * (1 / self.#scale);
            const diffY = (event.pageY - downY) * (1 / self.#scale);
            self.#offsetX = (offx + diffX);
            self.#offsetY = (offy + diffY);
            self.zoomTo();
        }
        this.input.onPointerDown(onPointerDown);
    }

    getScale() {
        return this.#scale;
    }

    snap(enabled = true) {
        this.#snapToGrid = enabled;
        this.traverseNodes((node) => node.snap(enabled));
    }

    snapToGrid() {
        return this.#snapToGrid;
    }

    traverseNodes(callback) {
        if (typeof callback !== 'function') return;
        for (let i = 0; i < this.nodes.children.length; i++) {
            const node = this.nodes.children[i];
            if (! node || ! node.isNode) continue;
            callback(node);
        }
    }

    zoomTo(zoom, clientX, clientY) {
        if (zoom === undefined) zoom = this.#scale;
        zoom = Math.round(Math.min(Math.max(zoom, 0.1), 2) * 100) / 100;

        // Before rect & after new zoom rect
        const before = this.nodes.dom.getBoundingClientRect();
        this.nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offsetX}px, ${this.#offsetY}px)`);
        const after = this.nodes.dom.getBoundingClientRect();

        // Scroll To
        if (clientX !== undefined && clientY !== undefined) {
            clientX -= before.left;
            clientY -= before.top;
            const shiftW = after.left - before.left;
            const shiftH = after.top - before.top;
            const dw = clientX - ((clientX / this.#scale) * zoom);
            const dh = clientY - ((clientY / this.#scale) * zoom);
            this.#offsetX -= ((shiftW - dw) / zoom);
            this.#offsetY -= ((shiftH - dh) / zoom);
        }

        // Set Scale
        this.nodes.setStyle('transform', `scale(${zoom}) translate(${this.#offsetX}px, ${this.#offsetY}px)`);

        // Align Grid
        const rect = this.dom.getBoundingClientRect();
        const diffX = (rect.width - (rect.width * zoom)) / 2;
        const diffY = (rect.height - (rect.height * zoom)) / 2;
        const ox = this.#offsetX * zoom;
        const oy = this.#offsetY * zoom;
        this.grid.setStyle('background-position', `left ${diffX + ox}px top ${diffY + oy}px`);

        // Save
        this.#scale = zoom;
    }

}

export { Graph };
