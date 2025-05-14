//
//  script.js
//  index.html
//
//  Created by Maria Jacob on 14/03/2025.
//

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll on anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
