document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const dimmedBackground = document.getElementById("dimmed-background");
    const productCards = document.querySelectorAll(".product-card");
    const noResultsMessage = document.getElementById("no-results");
    const suggestionsContainer = document.getElementById("suggestions");

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
            noResultsMessage.scrollIntoView({ behavior: "auto" }); // Scroll to "No results found" message
        } else {
            noResultsMessage.classList.add("hidden");
            noResultsMessage.style.display = "none";

            const firstResult = document.querySelector(".product-card:not([style*='display: none'])");
            if (firstResult) {
                firstResult.scrollIntoView({ behavior: "auto" }); // Scroll to the first visible product card
            }
        }

        // Hide suggestions when the search is performed
        suggestionsContainer.classList.add("hidden");
        suggestionsContainer.style.display = "none";
    }

    // Function to update suggestions
    function updateSuggestions() {
        const query = searchBar.value.toLowerCase();
        suggestionsContainer.innerHTML = ""; // Clear previous suggestions

        if (query.trim() === "") {
            suggestionsContainer.classList.add("hidden");
            return;
        }

        let suggestions = [];

        productCards.forEach(card => {
            const title = card.dataset.title ? card.dataset.title.toLowerCase() : "";

            if (title.includes(query) && !suggestions.includes(title)) {
                suggestions.push(title);
            }
        });

        if (suggestions.length === 0) {
            suggestionsContainer.classList.add("hidden");
        } else {
            suggestions.forEach(suggestion => {
                const suggestionElement = document.createElement("div");
                suggestionElement.textContent = suggestion;
                suggestionElement.classList.add("suggestion-item");
                suggestionElement.addEventListener("click", function () {
                    searchBar.value = suggestion;
                    suggestionsContainer.classList.add("hidden");
                    performSearch(); // Trigger search on click
                });
                suggestionsContainer.appendChild(suggestionElement);
            });

            suggestionsContainer.classList.remove("hidden");
            suggestionsContainer.style.display = "block"; // Ensure suggestions are visible
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
        }, 200); // Slight delay to allow interactions with suggestions
    });

    // Trigger search on button click
    searchButton.addEventListener("click", function () {
        performSearch();
    });

    // Update suggestions on input
    searchBar.addEventListener("input", updateSuggestions);

    // Trigger search on pressing Enter
    searchBar.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});
