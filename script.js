// Small interactive bits
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form submit handler (optional: show a message)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Let Formspree handle it — show a quick thank you message
    setTimeout(()=>{
      alert('धन्यवाद! आपका संदेश भेज दिया गया है।');
    }, 300);
  });
}
