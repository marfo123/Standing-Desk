// Welcome Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('welcome-modal');
    const closeButton = document.getElementById('close-modal');

    if (modal && closeButton) {
        modal.style.display = 'block';

        closeButton.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
});

// Animated text search
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        // Implement search functionality here
        console.log('Searching for:', this.value);
    });
}

// Basket functionality
let basket = [];

function addToBasket(product, price) {
    basket.push({ product, price });
    updateBasketDisplay();
}

function removeFromBasket(index) {
    basket.splice(index, 1);
    updateBasketDisplay();
}

function updateBasketDisplay() {
    const basketItems = document.getElementById('basket-items');
    const basketTotal = document.getElementById('basket-total');

    if (basketItems && basketTotal) {
        basketItems.innerHTML = '';
        let total = 0;

        basket.forEach((item, index) => {
            const basketItem = document.createElement('div');
            basketItem.classList.add('basket-item');
            basketItem.innerHTML = `
                <span>${item.product}</span>
                <span>£${item.price.toFixed(2)}</span>
                <button onclick="removeFromBasket(${index})">Remove</button>
            `;
            basketItems.appendChild(basketItem);
            total += item.price;
        });

        basketTotal.textContent = `£${total.toFixed(2)}`;

    }
}

// Example usage: addToBasket('Standing Desk Pro', 299.99);

// Accessibility: Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.classList.add('visually-hidden');
document.body.insertBefore(skipLink, document.body.firstChild);

// Responsive image loading
function loadResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        const mediaQuery = window.matchMedia(img.getAttribute('data-media'));
        if (mediaQuery.matches) {
            img.src = img.getAttribute('data-src');
        }
    });
}

window.addEventListener('load', loadResponsiveImages);
window.addEventListener('resize', loadResponsiveImages);

// Form validation
const contactForm = document.getElementById('contact');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement form validation here
        console.log('Form submitted');
    });
}