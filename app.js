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

//Soy la logica del dropdown

// Seleccionar todos los dropdowns
document.querySelectorAll('.dropdown').forEach((dropdown, index) => {
    const button = dropdown.querySelector('button');
    const respuesta = dropdown.querySelector('[id="respuesta"]'); // Selecciona por el ID aunque se repita
    const icon = dropdown.querySelector('.bi-plus-square, .bi-dash');
    
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Verificar si el dropdown actual ya está abierto
        const isOpen = respuesta.style.display === 'block';
        
        // Cerrar todos los dropdowns
        document.querySelectorAll('.dropdown [id="respuesta"]').forEach(resp => {
            resp.style.display = 'none';
        });
        
        // Resetear todos los iconos a plus
        document.querySelectorAll('.dropdown .bi-dash').forEach(icono => {
            icono.classList.remove('bi-dash');
            icono.classList.add('bi-plus-square');
        });
        
        // Si el dropdown actual no estaba abierto, abrirlo
        if (!isOpen) {
            respuesta.style.display = 'block';
            if (icon) {
                icon.classList.remove('bi-plus-square');
                icon.classList.add('bi-dash');
            }
        }
    });
});