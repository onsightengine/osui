import { Div } from '../core/Div.js';
import { MenuShortcut } from './MenuShortcut.js';
import { Row } from '../layout/Row.js';
import { VectorBox } from '../layout/VectorBox.js';

import { IMAGE_CHECK, IMAGE_EMPTY } from '../constants.js';

/** Menu item, hook into 'click' event (dispatched by OSUI.Menu) to process menu item user interaction */
class MenuItem extends Div {

    constructor(text = undefined, icon = undefined, shortcutText = undefined) {
        super();
        const self = this;
        this.setClass('MenuItem');
        this.setName(text);

        // Build
        this.divIcon = new VectorBox(icon);
        this.divIconHolder = new Div().add(this.divIcon).setClass('MenuIcon');
        this.divText = new Div().setClass('MenuText');
        this.divSpacer = new Div().setStyle('flex', '1 1 auto');
        this.divShortcut = new MenuShortcut(shortcutText);
        this.add(new Row().add(this.divIconHolder, this.divText, this.divSpacer, this.divShortcut));

        // Properties
        this.checked = false;
        this.disabled = false;
        this.subMenu = undefined;

        // Disable Context Menu
        function onContextMenu(event) {
            event.preventDefault();
        }

        this.onContextMenu(onContextMenu);

        // On Mouse Enter (hide all sub menus, show this sub menu)
        this.onPointerEnter(() => {
            // // Don't process menu items that don't have sub menus
            // if (this.subMenu == undefined) return;

            // Have parent menu hide all other children menus
            let parentMenu = self.parent;
            while (parentMenu && (parentMenu.hasClass('Menu') === false)) parentMenu = parentMenu.parent;
            if (parentMenu && parentMenu.closeMenu) parentMenu.closeMenu(false, self.dom);

            // Show our sub menu
            if (self.subMenu) self.subMenu.showMenu(self.dom);
        });

        // Text, Unselectable
        this.setText(text);
        this.selectable(false);
    }

    /******************** METHODS ********************/

    isChecked() {
        return this.checked;
    }

    isDisabled() {
        return this.disabled;
    }

    keepOpen() {
        this.addClass('KeepOpen');
        return this;
    }

    setChecked(checked) {
        const imageUrl = (checked) ? IMAGE_CHECK : IMAGE_EMPTY;
        if (checked) this.divIcon.addClass('IconColorize');
        else this.divIcon.removeClass('IconColorize');
        this.setImage(imageUrl);
        this.checked = checked;
        return this;
    }

    setDisabled(disabled) {
        if (disabled) this.addClass('Disabled');
        else this.removeClass('Disabled');
        this.disabled = disabled;
        return this;
    }

    setImage(imageUrl) {
        this.divIcon.setImage(imageUrl);
        return this;
    }

    setText(text) {
        this.divText.dom.innerHTML = text ?? ' ';
        return this;
    }

    /******************** SUB MENU ********************/

    /** Attaches a sub menu, first removes any previously attached sub menu */
    attachSubMenu(osuiMenu) {
        // Verify element is a .Menu
        if (osuiMenu.hasClass('Menu') === false) return this;

        // Add Animation
        osuiMenu.addClass('SlideDown');

        // Remove any existing sub menu, add new sub menu
        this.removeSubMenu();
        this.addClass('SubMenuItem');
        this.add(osuiMenu);
        this.subMenu = osuiMenu;
        return this;
    }

    hasSubMenu() {
        return this.hasClass('SubMenuItem');
    }

    /**
     * Remove any attached sub menu, returns osuiMenu that was attached
     */
    removeSubMenu() {
        this.removeClass('SubMenuItem');
        const osuiMenu = this.subMenu;
        this.subMenu = undefined;
        for (let i = this.contents().dom.children.length - 1; i >= 0; i--) {
            let child = this.contents().dom.children[i];
            if (child.classList.contains('Menu')) this.remove(child);
        }
        return osuiMenu;
    }

}

export { MenuItem };
