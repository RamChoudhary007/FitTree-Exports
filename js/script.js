// My JavaScript for the FitTree Exports website, I added this to make the search and form work

document.addEventListener('DOMContentLoaded', function() {
    // Get the search input and product list
    const searchInput = document.getElementById('searchInput');
    const productList = document.getElementById('productList');

    // If there's a search input and product list, add a listener for when someone types
    if (searchInput && productList) {
        const products = productList.querySelectorAll('.col-md-4');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            // Loop through each product and show/hide based on search
            products.forEach(product => {
                const title = product.querySelector('.card-title').textContent.toLowerCase();
                const description = product.querySelector('.card-text').textContent.toLowerCase();

                if (title.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

    // Contact form stuff
    const contactForm = document.getElementById('contactForm');

    // If there's a contact form, handle submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from actually submitting

            // Get all the form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const contactNo = document.getElementById('contactNo').value.trim();
            const product = document.getElementById('product').value;
            const message = document.getElementById('message').value.trim();

            // Check if all fields are filled
            if (!name || !email || !contactNo || !product || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Check if email is valid, I used a regex for this
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show the success message as a popup
            alert('Thank you for your inquiry! We will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }
});

// Function to check if email is valid, I copied this regex from somewhere
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
