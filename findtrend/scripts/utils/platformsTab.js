export class Tab {
    constructor(tabsButtons, tabsItem) {
        this.tabsButton = tabsButtons;
        this.tabsButtons = document.querySelectorAll(`.${tabsButtons}`);
        this.tabsItems = document.querySelectorAll(`.${tabsItem}`);
        this.tabsItem = tabsItem;
    }

    clickListener() {
        this.tabsButtons.forEach(button => {
            button.addEventListener('click', () => {
                const prevActiveButton = document.querySelector(`.${this.tabsButton}.${this.tabsButton}--active`);
                const prevActiveItem = document.querySelector(`.${this.tabsItem}.${this.tabsItem}--active`);


                if (prevActiveButton) {
                    prevActiveButton.classList.remove(`${this.tabsButton}--active`);
                }

                if (prevActiveItem) {
                    prevActiveItem.classList.remove(`${this.tabsItem}--active`);
                }


                const nextActiveItemId = `#${button.getAttribute('data-tab')}`;
                const nextActiveItem = document.querySelector(nextActiveItemId);
                
                button.classList.add(`${this.tabsButton}--active`);
                nextActiveItem.classList.add(`${this.tabsItem}--active`);
            });
        });
    }
}
