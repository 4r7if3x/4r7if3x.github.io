const currentYear = new Date().getFullYear();
const footerLink = document.querySelector('.site-footer a');
const copyrightLink = document.createElement('a');

copyrightLink.href = 'https://github.com/4r7if3x';
copyrightLink.textContent = `Copyright © 2008–${currentYear} The Artifex`;
copyrightLink.className = 'copyright';

footerLink.parentElement.insertBefore(copyrightLink, footerLink.nextSibling);
