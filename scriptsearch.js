// Search index data (you can modify this as needed for your actual content)
const searchIndex = [
    { title: "Laptops", url: "Electronics-Laptops.html", keywords: ["laptops", "electronics"] },
    { title: "Mobile Phones", url: "Electronics-Smartphones.html", keywords: ["phones", "mobile", "electronics"] },
	{ title: "Headphones", url: "Electronics-Headphones.html", keywords: ["phones", "mobile", "electronics"] },
	{ title: "Cameras", url: "Electronics-Camera.html", keywords: ["phones", "mobile", "electronics"] },
    { title: "Fiction Books", url: "Books-Fiction.html", keywords: ["fiction", "books", "reading"] },
    { title: "Men's Fashion", url: "Fashion-Man.html", keywords: ["fashion", "men", "clothing"] },
    { title: "Home Appliances", url: "Health-HomeAppliances.html", keywords: ["appliances", "home", "electronics"] }
];

// Function to search the index
function search(query) {
    return searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
    );
}

// Function to display search results in the modal or results area
function displayResults(query) {
    const resultsContainer = document.getElementById("search-results");
    const results = search(query);

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach(result => {
            const resultElement = document.createElement("a");
            resultElement.href = result.url;
            resultElement.target = "_blank";
            resultElement.textContent = result.title;
            resultElement.classList.add("search-result-item"); // Adding custom class for styling
            resultsContainer.appendChild(resultElement);
        });
    }

    // Show the results (you can use a modal, or display them in a dedicated section)
    document.getElementById("search-modal").style.display = "block";
}

// Function to hide the modal or results area
function closeModal() {
    document.getElementById("search-modal").style.display = "none";
}

// Event listener for the search button (if you're using a button)
document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-bar").value.trim();
    if (query) {
        displayResults(query);
    }
});

// Optional: Hide the results when clicking the close button in the modal
document.getElementById("close-button").addEventListener("click", closeModal);

//Search overlay
const searchBar = document.getElementById('search-bar');
const overlay = document.querySelector('.overlay');

// Add event listeners to toggle the overlay
searchBar.addEventListener('focus', () => {
    overlay.classList.add('active'); // Activate the overlay
});

searchBar.addEventListener('blur', () => {
    overlay.classList.remove('active'); // Remove the overlay
});
