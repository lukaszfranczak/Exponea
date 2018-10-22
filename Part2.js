(() => {
    const alternativeButtonColorList = {
        baseColor: '#ffd23d',
        hoverColor: '#e5bd37',
        activeShadowColor: 'rgba(229, 189, 55, 0.5)',
        buttonTextColor: '#000'
    }

    const changeAddToCartButtonColor = () => {
        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = `.btn-color-add-to-bag, #view-shoppingbag-button  { background-color:${alternativeButtonColorList.baseColor} !important; border-color:${alternativeButtonColorList.baseColor} !important; color: ${alternativeButtonColorList.buttonTextColor} !important; fill: ${alternativeButtonColorList.buttonTextColor} !important }` +
            `.btn-color-add-to-bag:not(:disabled):hover { background-color:${alternativeButtonColorList.hoverColor} !important; border-color:${alternativeButtonColorList.hoverColor} !important }` +
            `.btn-color-add-to-bag:not(:disabled):focus, .btn-color-add-to-bag:not(:disabled):active { background-color:${alternativeButtonColorList.hoverColor} !important; border-color:${alternativeButtonColorList.hoverColor} !important; box-shadow: 0px 0px 5px 3px ${alternativeButtonColorList.hoverColor} }` +
            `.btn:not(:disabled):focus { box-shadow: 0px 0px 5px 2px ${alternativeButtonColorList.activeShadowColor} !important }` +
            `#buy-online-add { fill: ${alternativeButtonColorList.buttonTextColor} !important } `;
        document.body.appendChild(css);
    }

    if (localStorage.getItem('addToCartButtonColor') === alternativeButtonColorList.baseColor) {
        changeAddToCartButtonColor();
    } else if (localStorage.getItem('addToCartButtonColor') === null) {
        if (Math.random() > 0.5) {
            localStorage.setItem('addToCartButtonColor', alternativeButtonColorList.baseColor)
            changeAddToCartButtonColor();
        } else {
            localStorage.setItem('addToCartButtonColor', 'nothing');
        }
    }
}
)();