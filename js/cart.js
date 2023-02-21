const cardWrapper = document.querySelector('.card-wrapper');

// add card in basket
window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-card')) {
        const card =  event.target.closest('.card');
        

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-titile').innerText,
            weight: card.querySelector('.price-weight').innerText,
            price: card.querySelector('.price-currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        const itemInCart = cardWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {

        const cartItemHTML = `
        <div class="card-item-top" data-id="${productInfo.id}">
            <div class="card-item-top-img">
                <img src="${productInfo.imgSrc}" alt="burger" width="150px">
            </div>
            <div class="card-item-desc">
                <div class="card-item-desc-title">${productInfo.title}</div>
                <div class="card-item-desc-weight">${productInfo.weight}</div>
                <div class="card-item-desc-details">
                    <div class="card-item-desc-details-wrapper-counter items-wrapper">
                        <div class="items-control-l-w" data-action="minus">-</div>
                        <div class="items-current-w" data-counter>${productInfo.counter}</div>
                        <div class="items-control-r-w" data-action="plus">+</div>
                    </div>
                    <div class="card-item-desc-details-price">${productInfo.price}</div>
                </div>
            </div>
        </div>`;

        cardWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        };

        card.querySelector('[data-counter]').innerText = "1";

    
        toggleCardStatus();
        calcPrice();
    }

});

// toggle empty basket and delivery
function toggleCardStatus() {
    const cardEmpty = document.querySelector('.basket-empty');
    const orderForm = document.querySelector('.submit-order');


    if (cardWrapper.children.length > 0) {
        cardEmpty.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cardEmpty.classList.remove('none');
        orderForm.classList.add('none');
    }
};
