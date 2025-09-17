document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('destination');
    const suggestionsBox = document.getElementById('suggestions-box');

    if (searchInput) {
        searchInput.addEventListener('input', async (e) => {
            const query = e.target.value;


            if (query.length < 2) {
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
                return;
            }

            try {
                // Calling our backend API
                const response = await fetch(`/listings/api/suggestions?q=${query}`);
                const suggestions = await response.json();

                if (suggestions.length > 0) {
                    suggestionsBox.innerHTML = ''; // Clear previous suggestions
                    const ul = document.createElement('ul');
                    suggestions.forEach(suggestion => {
                        const li = document.createElement('li');
                        li.textContent = suggestion;
                        // When a suggestion is clicked, fill the input box
                        li.addEventListener('click', () => {
                            searchInput.value = suggestion;
                            suggestionsBox.style.display = 'none';
                        });
                        ul.appendChild(li);
                    });
                    suggestionsBox.appendChild(ul);
                    suggestionsBox.style.display = 'block';
                } else {
                    suggestionsBox.style.display = 'none';
                }
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                suggestionsBox.style.display = 'none';
            }
        });

        // Hide suggestions when clicking outside the search box
        document.addEventListener('click', (e) => {
            if (e.target !== searchInput) {
                suggestionsBox.style.display = 'none';
            }
        });
    }
});

 const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");

  checkin.addEventListener("change", () => {
    checkout.min = checkin.value;
    if (checkout.value < checkin.value) {
      checkout.value = checkin.value; // auto-fix if invalid
    }
  });