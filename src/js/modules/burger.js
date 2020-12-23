const burger = (menuSelector, burgerSelector, burgerItemSelector) => {
    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector),
          menuItem = document.querySelectorAll(burgerItemSelector);


    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
        } else {
            menuElem.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menuElem.style.display = 'none';
        });
    });
};

export default burger;