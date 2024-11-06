// Sample ratings for each product (you can modify this dynamically as needed)
    const productRatings = {
        product1: 4,   // Rating for Product 1
        product2: 3.5, // Rating for Product 2
        product3: 5,   // Rating for Product 3
    };

    // Function to generate the star rating for a product
    function generateRating(productId, rating) {
        const totalStars = 5; // Always 5 stars for the rating system
        const starContainer = document.getElementById(`rating-${productId}`);
        
        // Clear existing stars
        starContainer.innerHTML = '';

        // Loop to generate stars
        for (let i = 1; i <= totalStars; i++) {
            const star = document.createElement('i');
            if (i <= Math.floor(rating)) {
                // Filled star
                star.className = 'fa fa-star filled';
            } else if (i > Math.floor(rating) && i <= rating) {
                // Half-star (if needed)
                star.className = 'fa fa-star-half-alt filled';
            } else {
                // Empty star (with border)
                star.className = 'fa fa-star-o empty';
            }

            starContainer.appendChild(star);
        }
    }

    // Call the function for each product
    generateRating('product1', productRatings.product1);
    generateRating('product2', productRatings.product2);
    generateRating('product3', productRatings.product3);