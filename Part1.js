// Task 1

(() => {
    if (window.location.href === "https://www.ikea.com/gb/en/") {
        console.log("homepage");
    } else if (window.location.href.indexOf("https://www.ikea.com/gb/en/products/") > -1) {
        console.log('Product name:', document.querySelector('.pie-productname').innerText)
        console.log('Product price:', parseFloat(document.querySelector('[itemprop=price]').innerText))
    } else if (window.location.href.indexOf("https://secure.ikea.com/gb/en/order/shoppingbag/") > -1) {
        const arrTemp = [];
        document.querySelectorAll('.IKEA-PageModule-ShoppingBag-_Item .Price-information--value').forEach(e => arrTemp.push(parseFloat(e.innerText)))
        const sum = arrTemp.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        const avg = (sum / arrTemp.length).toFixed(2);
        console.log('Number of products: ', document.querySelectorAll('.IKEA-PageModule-ShoppingBag-_Item').length, ', Average price: ', avg)
    } else if (window.location.href.indexOf("https://www.ikea.com/gb/en/search/?k=") > -1) {
        console.log(document.querySelector('.IKEA-PageModule-Search-Search').children[0].children[0].innerText);
        const addToCartButtonList = document.querySelectorAll('.IKEA-Component-Form-Submit-Submit-button');
        addToCartButtonList.forEach(e => e.onclick = () => console.log('added to cart', e.parentElement.parentElement.parentElement.querySelector('.pie-productname').children[0].innerText))
    }

    if (window.location.href.indexOf("https://www.ikea.com/gb/en/products/") > -1) {
        document.querySelector('.btn-color-add-to-bag').setAttribute('style', 'background-color:#ffd23d !important; border-color:#ffd23d !important');
    }
})();