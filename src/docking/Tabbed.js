import { Css } from '../utils/Css.js';
import { Div } from '../core/Div.js';
import { Dom } from '../utils/Dom.js';
import { Floater } from './Floater.js';
import { Panel } from '../panels/Panel.js';
import { PANEL_STYLES } from '../panels/Panel.js';

export const TAB_SIDES = {
    LEFT:       'left',
    RIGHT:      'right',
    TOP:        'top',
    BOTTOM:     'bottom',
}

const MINIMUM_TABS_TO_SHOW = 1; /* value of 2 will cause tabs to show only when there are 2 or more tabs */

class Tabbed extends Panel {

    constructor({
        tabSide = TAB_SIDES.RIGHT,
        style = PANEL_STYLES.FANCY,
    } = {}) {
        super({ style });
        self = this;
        this.addClass('suey-tabbed');

        // Public Properties
        this.selectedID = '';       // 'id' (name) of selected tab

        // Children Elements
        this.buttons = new Div().setClass('suey-tab-buttons').setDisplay('none');
        this.panels = new Div().setClass('suey-tab-panels');
        this.add(this.buttons, this.panels);

        // Set TAB_SIDES that Tab Buttons should appear
        this.setTabSide(tabSide);

        // Events
        function onPointerEnter() {
            document.body.classList.remove('suey-no-resize');
        }
        this.dom.addEventListener('pointerenter', onPointerEnter);
    }

    /******************** ADD */

    addTab(tabPanel) {
        if (!tabPanel || !tabPanel.hasClass('suey-floater')) {
            console.error(`Tabbed.addTab: Expected Tab as first argument`, tabPanel);
            return null;
        }

        // Update Parent Dock
        tabPanel.dock = this;

        // Push onto containers
        this.buttons.add(tabPanel.button);
        this.panels.add(tabPanel);

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');

        // Minimum height (so Tab Buttons dont float over nothing)
        this.setContentsStyle('minHeight', '');
        if (this.buttons.hasClass('suey-left-side') || this.buttons.hasClass('suey-right-side')) {
            this.setContentsStyle('minHeight', ((2.2 * this.buttons.children.length) + 0.4) + 'em');
        }

        return tabPanel;
    }

    addNewTab(tabID, content, options = {}) {
        return this.addTab(new Floater(tabID, content, options));
    }

    /******************** SELECT */

    /** Select first tab */
    selectFirst() {
        if (this.panels.children.length > 0) {
            return this.selectTab(this.panels.children[0].getID());
        } else {
            const tabChange = new Event('tab-changed');
            tabChange.value = undefined;
            this.dom.dispatchEvent(tabChange);
            return false;
        }
    }

    /** Select Tab */
    selectTab(newID, wasClicked = false) {
        const selectedID = this.selectedID;

        // Find button / panel with New ID
        const panel = this.panels.children.find((item) => (item.getID() === newID));
        if (panel && panel.button) {
            const button = panel.button;

            // Disable animations while rebuilding
            if (!wasClicked) Css.setVariable('--tab-timing', '0', button.dom);

            // Deselect current selection
            const currentPanel = this.panels.children.find((item) => (item.getID() === selectedID));
            if (currentPanel) {
                currentPanel.addClass('suey-hidden');
                if (currentPanel.button) currentPanel.button.removeClass('suey-selected');
            }

            // Select new panel / button
            panel.removeClass('suey-hidden');
            button.addClass('suey-selected');

            // Set New ID
            this.selectedID = newID;

            // Emit event
            const tabChange = new Event('tab-changed');
            tabChange.value = newID;
            this.dom.dispatchEvent(tabChange);

            // Re-enable animationss
            if (!wasClicked) setTimeout(() => Css.setVariable('--tab-timing', '200ms', button.dom), 50);
            return true;
        }
        return false;
    }

    /******************** REMOVE */

    clearTabs() {
        if (this.buttons) this.buttons.clearContents();
        if (this.panels) this.panels.clearContents();
        this.setStyle('minHeight', '');

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
    }

    destroy() {
        this.clearTabs();
        super.destroy();
    }

    removeTab(index) {
        if (index >= 0 && index < this.panels.children.length) {
            const button = this.buttons.children[index];
            const panel = this.panels.children[index];
            if (button) button.removeClass('suey-selected');
            if (panel) panel.addClass('suey-hidden');
            this.buttons.detach(button);
            this.panels.detach(panel);
        }

        // Minimum Tabs to Show
        this.buttons.setDisplay((this.buttons.children.length >= MINIMUM_TABS_TO_SHOW) ? '' : 'none');
    }

    /******************** INFO */

    getTabSide() {
        if (this.buttons.hasClass('suey-left-side')) return 'left';
        if (this.buttons.hasClass('suey-right-side')) return 'right';
        if (this.buttons.hasClass('suey-top-side')) return 'top';
        if (this.buttons.hasClass('suey-bottom-side')) return 'bottom';
        return 'unknown';
    }

    setTabSide(side, opposite = false) {
        side = String(side).toLowerCase();
        this.buttons.removeClass('suey-left-side', 'suey-right-side', 'suey-top-side', 'suey-bottom-side');
        if (opposite) {
            if (side === 'left') side = 'right';
            else if (side === 'right') side = 'left';
            else if (side === 'top') side = 'bottom';
            else if (side === 'bottom') side = 'top';
        }
        this.buttons.addClass(`suey-${side}-side`);
    }

    tabCount() {
        return this.panels.children.length;
    }

}

export { Tabbed };
