// click the quantity of the product add card to basket or del
window.addEventListener('click', function (event) {

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.items-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
                counter.innerText = ++counter.innerText;
        };

        if (event.target.dataset.action === 'minus') {
                if (parseInt(counter.innerText) > 1) {
                    counter.innerText = --counter.innerText;
                } else if (event.target.closest('.card-wrapper') && parseInt(counter.innerText) === 1) {
                    event.target.closest('.card-item-top').remove();

                    toggleCardStatus();
                    calcPrice();
                }
        };
    } 


    if (event.target.hasAttribute('data-action') && event.target.closest('.card-wrapper')) {
        calcPrice();
    }
});

// total basket price
function calcPrice() {
    const cardWrapper = document.querySelector('.card-wrapper');
    const cardItems = document.querySelectorAll('.card-item-top');  
    const totalPriceEl = document.querySelector('.total-sum');
    let totalPrice = 0;
   
    cardItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.card-item-desc-details-price');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += currentPrice;
        
    }) 

    totalPriceEl.innerText = totalPrice;
};