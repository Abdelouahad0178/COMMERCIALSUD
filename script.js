document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuster la distance de décalage
                behavior: 'smooth'
            });
        });
    });
});
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.produit');
    
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';  // Affiche le produit
        } else {
            product.style.display = 'none';  // Cache le produit
        }
    });
}
