import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Interaction } from '../utils/Interaction.js';
import { Panel, PANEL_STYLES } from './Panel.js';
import { VectorBox } from '../layout/VectorBox.js';

export const TAB_SIDES = {
    LEFT:		'left',
    RIGHT:		'right',
}

class Tabbed extends Panel {

    #startWidth = null;
    #startHeight = null;
    #minWidth = 0;
    #maxWidth = Infinity;
    #minHeight = 0;
    #maxHeight = Infinity;

    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
        resizers = [],
        startWidth = null,
        startHeight = null,
        minWidth = 0,
        maxWidth = Infinity,
        minHeight = 0,
        maxHeight = Infinity,
    } = {}) {
        super({ style, resizers, startWidth, startHeight, minWidth, maxWidth, minHeight, maxHeight });
        const self = this;
        this.setName('Tabbed');
        this.addClass('Tabbed');

        // Properties
        this.#startWidth = startWidth;
        this.#minWidth = minWidth;
        this.#maxWidth = maxWidth;
        this.#startHeight = startHeight;
        this.#minHeight = minHeight;
        this.#maxHeight = maxHeight;

        // Public Properties
        this.tabs = [];
        this.panels = [];
        this.selectedId = '';
        this.selectedCount = 0;

        // Resizers
        let rect = {};
        function resizerDown() {
            rect.width = self.getWidth();
            rect.height = self.getHeight();
            self.dom.dispatchEvent(new Event('clicked', { 'bubbles': true, 'cancelable': true }));
        }
        function resizerMove(resizer, diffX, diffY) {
            if (resizer.hasClassWithString('Left')) self.changeWidth(rect.width - diffX);
            if (resizer.hasClassWithString('Right')) self.changeWidth(rect.width + diffX);
            if (resizer.hasClassWithString('Top')) self.changeHeight(rect.height - diffY);
            if (resizer.hasClassWithString('Bottom')) self.changeHeight(rect.height + diffY);
        }
        Interaction.makeResizeable(this, this, resizers, resizerDown, resizerMove);

        // Children Elements
        this.tabsDiv = new Div().setClass('Tabs').setDisplay('none');
        this.panelsDiv = new Div().setClass('TabPanels');
        this.add(this.tabsDiv);
        this.add(this.panelsDiv);

        // Set side (LEFT / RIGHT) that tabs should appear
        this.setTabSide(tabSide);

        /** Add Tab */
        this.addTab = function(id, items, icon, bgColor = undefined) {
            // Count Id's
            let numTabsWithId = 0;
            for (let i = 0; i < self.tabs.length; i++) {
                const tab = self.tabs[i];
                if (tab.dom.id === id) numTabsWithId++;
            }

            function capitalize(string) {
                const words = String(string).split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
                }
                return words.join(' ');
            }

            // Create tab
            const label = capitalize(id);
            const tab = new TabButton(self, label, icon, bgColor);
            tab.setId(id);
            tab.count = numTabsWithId;

            // Push onto containers
            self.tabs.push(tab);
            self.tabsDiv.add(tab);

            // // NOTE: If below is changed from '0' to '1', tabs will be hidden when there is only 1 tab
            if (self.tabs.length > 0) self.tabsDiv.setDisplay('');

            const panel = new Panel().setId(id).addClass('Titled').addClass('Hidden').add(items);
            panel.count = numTabsWithId;
            self.panels.push(panel);
            self.panelsDiv.add(panel);

            self.setContentsStyle('minHeight', '');
            if (self.tabsDiv.hasClass('LeftSide') || self.tabsDiv.hasClass('RightSide')) {
                self.setContentsStyle('minHeight', ((2.2 * self.tabs.length) + 0.4) + 'em');
            }

            return panel;
        };

    }

    /******************** RESIZE ********************/

    changeWidth(width) {
        if (typeof width !== 'number' || Number.isNaN(width) || ! Number.isFinite(width)) width = this.#startWidth;
        if (width == null) {
            this.dom.style.removeProperty('width');
            return null;
        }
        const scaledMinWidth = this.#minWidth * Css.guiScale(this.dom);
        const scaledMaxWidth = this.#maxWidth * Css.guiScale(this.dom);
        width = Math.min(scaledMaxWidth, Math.max(scaledMinWidth, parseFloat(width))).toFixed(1);
        this.setStyle('width', Css.toEm(width, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return width;
    }

    changeHeight(height) {
        if (typeof height !== 'number' || Number.isNaN(height) || ! Number.isFinite(height)) height = this.#startHeight;
        if (height == null) {
            this.dom.style.removeProperty('height');
            return null;
        }
        const scaledMinHeight = this.#minHeight * Css.guiScale(this.dom);
        const scaledMaxHeight = this.#maxHeight * Css.guiScale(this.dom);
        height = Math.min(scaledMaxHeight, Math.max(scaledMinHeight, parseFloat(height))).toFixed(1);
        this.setStyle('height', Css.toEm(height, this.dom));
        this.dom.dispatchEvent(new Event('resized'));
        return height;
    }

    /******************** TABS ********************/

    /** Select first tab */
    selectFirst() {
        if (this.tabs.length > 0) {
            return this.selectTab(this.tabs[0].getId());
        }
        return false;
    }

    /** Select last known tab */
    selectLastKnownTab() {

        // TO BE IMPLEMENTED IN APP

    }

    /** Select Tab */
    selectTab(id, count = 0, wasClicked = false) {
        if (this.tabs == undefined) return this;
        const self = this;

        // Find tab / panel by id
        const tab = this.tabs.find(function(item) { return (item.dom.id === id && item.count === count); });
        const panel = this.panels.find(function(item) { return (item.dom.id === id && item.count === count); });
        if (tab && panel) {
            // Disable animations while rebuilding
            if (! wasClicked) Css.setVariable('--tab-timing', '0', tab.dom);

            // Deselect current selection
            const currentTab = this.tabs.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            const currentPanel = this.panels.find(function(item) {
                return (item.dom.id === self.selectedId && item.count === self.selectedCount);
            });
            if (currentTab) currentTab.removeClass('Selected');
            if (currentPanel) currentPanel.addClass('Hidden');

            // Select new tab and panel
            tab.addClass('Selected');
            panel.removeClass('Hidden');

            // Set id
            this.selectedId = id;
            this.selectedCount = count;

            // Emit event
            if (wasClicked) {
                const tabChange = new Event('tab-changed');
                tabChange.value = id;
                this.dom.dispatchEvent(tabChange);
            }

            // Re-enable animationss
            if (! wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', tab.dom), 50);

            return true;
        }

        return false;
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    clearTabs() {
        if (this.tabsDiv) this.tabsDiv.clearContents();
        if (this.panelsDiv) this.panelsDiv.clearContents();
        if (this.tabs) {
            for (let i = 0; i < this.tabs.length; i++) this.tabs[i].destroy();
            this.tabs.length = 0;
        }
        if (this.panels) {
            for (let i = 0; i < this.panels.length; i++) this.panels[i].destroy();
            this.panels.length = 0;
        }
        this.setStyle('minHeight', '');
    }

    currentId() {
        return this.selectedId;
    }

    setTabSide(side) {
        side = String(side).toLowerCase();
        this.tabsDiv.removeClass('LeftSide');
        this.tabsDiv.removeClass('RightSide');
        if (side === TAB_SIDES.RIGHT) this.tabsDiv.addClass('RightSide');
        else this.tabsDiv.addClass('LeftSide');
    }

    tabIndex(id) {
        return this.tabs.indexOf(id);
    }

}

/******************** TAB BUTTON ********************/

class TabButton extends Div {

    constructor(parent, label, icon, bgColor = undefined) {
        super();
        const self = this;
        this.setClass('TabButton');
        this.setCursor('default');

        // Icon / Label
        this.iconVector = new VectorBox(icon);
        this.iconBorder = new Div().setClass('TabIcon');
        this.add(this.iconVector, this.iconBorder);
        this.setLabel = function(label) {
            self.iconBorder.dom.setAttribute('tooltip', label);
        }
        this.setLabel(label);

        // Background Color
        if (bgColor !== undefined && bgColor !== null) {
            let m, r, g, b;

            // Css String: rgb(255, 0, 0)
            if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(bgColor)) {
                let color;
                const name = m[1];
                const components = m[2];
                switch (name) {
                    case 'rgb':
                    case 'rgba':
                        if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            // rgb(255,0,0) rgba(255,0,0,0.5)
                            r = Math.min(255, parseInt(color[1], 10));
                            g = Math.min(255, parseInt(color[2], 10));
                            b = Math.min(255, parseInt(color[3], 10));
                        }
                        if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                            // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
                            r = (Math.min(100, parseInt(color[1], 10)) / 100);
                            g = (Math.min(100, parseInt(color[2], 10)) / 100);
                            b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        }
                        break;
                }

            // String Color: #ff0000
            } else if (m = /^\#([A-Fa-f\d]+)$/.exec(bgColor)) {
                const hex = m[1];
                const size = hex.length;
                // #FF0
                if (size === 3) {
                    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                // #FF0000
                } else if (size === 6) {
                    r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                    g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                    b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                }

            // Hex Color: 0xff0000
            } else {
                const hexColor = Math.min(Math.max(Math.floor(bgColor), 0), 0xffffff);
                r = (hexColor & 0xff0000) >> 16;
                g = (hexColor & 0x00ff00) >> 8;
                b = (hexColor & 0x0000ff);
            }

            const rDark = parseInt(r * 0.75);
            const gDark = parseInt(g * 0.75);
            const bDark = parseInt(b * 0.75);

            const light = `rgb(${r}, ${g}, ${b})`;
            const dark = `rgb(${rDark}, ${gDark}, ${bDark})`;

            const bgImage = `linear-gradient(to bottom left, ${light}, ${dark})`;
            this.iconVector.setStyle('background-image', bgImage);
        }

        // Events
        function onClick() {
            parent.selectTab(self.dom.id, self.count, true);
            parent.dom.dispatchEvent(new Event('resized'));
        }
        this.onClick(onClick);
    }

}

export { Tabbed };
