document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const dimmedBackground = document.getElementById("dimmed-background");
    const productCards = document.querySelectorAll(".product-card");
    const noResultsMessage = document.getElementById("no-results");

    // Function to perform search
    function performSearch() {
        const query = searchBar.value.toLowerCase();
        let hasResults = false;

        productCards.forEach(card => {
            const title = card.dataset.title ? card.dataset.title.toLowerCase() : "";
            const description = card.dataset.description ? card.dataset.description.toLowerCase() : "";

            if (title.includes(query) || description.includes(query)) {
                card.style.display = "block";
                hasResults = true; // At least one match found
            } else {
                card.style.display = "none";
            }
        });

        // Show or hide the "No results found" message
        if (!hasResults) {
            noResultsMessage.classList.remove("hidden");
            noResultsMessage.style.display = "block";
        } else {
            noResultsMessage.classList.add("hidden");
            noResultsMessage.style.display = "none";
        }
    }

    // Show dimmed background when search bar is focused
    searchBar.addEventListener("focus", function () {
        dimmedBackground.classList.remove("hidden");
        dimmedBackground.style.display = "block"; // Ensure it's visible
    });

    // Hide dimmed background when search bar loses focus
    searchBar.addEventListener("blur", function () {
        setTimeout(() => {
            dimmedBackground.classList.add("hidden");
            dimmedBackground.style.display = "none";
        }, 200); // Slight delay to allow interactions with suggestions or "No results" message
    });

    // Trigger search on button click
    searchButton.addEventListener("click", function () {
        performSearch();
        dimmedBackground.classList.add("hidden"); // Hide dimmed background after search
        dimmedBackground.style.display = "none";
    });

    // Trigger search on pressing Enter
    searchBar.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            performSearch();
            dimmedBackground.classList.add("hidden"); // Hide dimmed background after Enter key
            dimmedBackground.style.display = "none";
        }
    });
});
