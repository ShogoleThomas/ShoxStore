// Function to perform the search
function performSearch() {
  let searchTerm = document.getElementById('search-bar').value.toLowerCase(); // Get the search term
  let content = document.body.innerText.toLowerCase(); // Get all the text content on the website
  
  // Check if the search term is found in the website's content
  if (content.includes(searchTerm)) {
    alert("Found the search term!"); // Display a message if the term is found
    highlightSearchTerm(searchTerm); // Highlight matching text on the page
  } else {
    alert("No results found."); // Display message if no matches are found
  }
}

// Function to highlight the search term
function highlightSearchTerm(term) {
  // Remove previous highlights (if any)
  let highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach(function(element) {
    element.classList.remove('highlight');
  });

  // Create a regular expression for the search term
  let regex = new RegExp('(' + term + ')', 'gi');
  
  // Find all text nodes and highlight the matching term
  let bodyText = document.body.innerHTML;
  document.body.innerHTML = bodyText.replace(regex, function(match) {
    return `<span class="highlight">${match}</span>`;
  });
}
