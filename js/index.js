// Using the EmailJS library to send emails
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate user input
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Send email using EmailJS
  emailjs.send('service_hwegtnk', 'template_e3omqgm', {
    from_name: name,
    email_id: email,
    message: message,
  })
 .then((response) => {
    console.log('Email sent successfully:', response);
    alert('Email successfully sent to Emeka Bruno!');
  })
 .catch((error) => {
    console.error('Error sending email:', error);
    alert('Error sending email. Please try again later.');
  });
});
