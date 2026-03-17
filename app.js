// Gallery Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and gallery items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    // Show all items
                    item.style.display = 'block';
                } else {
                    // Check if item category matches filter
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Fix for nested gallery-grid structure
    // This will ensure all gallery items are properly selected
    fixGalleryStructure();
    
    // Add some animation when filtering
    addFilterAnimation();
});

// Function to fix the nested gallery-grid structure
function fixGalleryStructure() {
    // Get the main gallery container
    const mainGallery = document.querySelector('.gallery-grid');
    
    // Get all gallery items
    const allItems = document.querySelectorAll('.gallery-item');
    
    // Move all gallery items directly under the main gallery grid
    allItems.forEach(item => {
        // Check if the item is deeply nested
        if (item.parentElement !== mainGallery) {
            // Move it to the main gallery grid
            mainGallery.appendChild(item);
        }
    });
}


