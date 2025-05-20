
        // Size selection
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });

        // Quantity controls
        const minusBtn = document.querySelector('.minus');
        const plusBtn = document.querySelector('.plus');
        const quantitySpan = document.querySelector('.quantity');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 1) {
                quantitySpan.textContent = quantity - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity < 10) {
                quantitySpan.textContent = quantity + 1;
            }
        });

        // Buy button
        const buyButton = document.querySelector('.buy-button');
        buyButton.addEventListener('click', () => {
            const selectedSize = document.querySelector('.size-option.selected');
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }
            alert('Thank you for your purchase!');
        });