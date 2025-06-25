// filter based on input and show suggestions
function filterPages() {
    const query = document.getElementById('search-bar').value.toLowerCase().trim();
    const pages = document.querySelectorAll('#wiki-pages-list li');
    const suggestionsBox = document.getElementById('suggestions');
    
    // Clear suggestions
    suggestionsBox.innerHTML = '';

    let matches = [];
    pages.forEach((page) => {
        const text = page.textContent.toLowerCase();
        if (text.includes(query)) {
            page.style.display = 'list-item';
            matches.push(page.textContent.trim()); // Collect matching pages for suggestions
        } else {
            page.style.display = 'none';
        }
    });

    // Populate suggestions
    if (query && matches.length > 0) {
        matches.forEach(match => {
            const suggestion = document.createElement('div');
            suggestion.className = 'suggestion';
            suggestion.textContent = match;
            suggestion.addEventListener('click', () => {
                document.getElementById('search-bar').value = match;
                filterPages(); // Update the filter when a suggestion is clicked
                suggestionsBox.innerHTML = '';
            });
            suggestionsBox.appendChild(suggestion);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
}



// Filter by category
function filterByCategory(category) {
    const pages = document.querySelectorAll('#wiki-pages-list li');

    pages.forEach((page) => {
        if (page.dataset.category === category) {
            page.style.display = 'list-item';
        } else {
            page.style.display = 'none';
        }
    });
}
