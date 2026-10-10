const contactForm = document.getElementById('contactForm'); 
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactText = document.getElementById('contactText');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (contactName.value.trim() !== '' && contactEmail.value.trim() !== '' && contactText.value.trim() !== '') {
        alert('Successful submitted!');
        contactForm.reset();
    } else {
        alert('Please fill all inputs!');
    }
});
