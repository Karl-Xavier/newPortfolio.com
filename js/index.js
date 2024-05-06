/* document.querySelector(".year").innerHTML = new Date().getFullYear()
const form = document.querySelector("#contact-form")

form.addEventListener("submit", function(event){
    event.preventDefault()
    // Get the Values from the form
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const message = document.querySelector("#message").value

    const data = `Name:${name}\r\n
                  Email:${email}\r\n
                  Message:${message}`

    // send email to my address

    fetch("https://www.goggle.com/recaptcha/api/siteverify",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:
       ` secret=6Lfv0mcUAAAAAJ2KPt5G5HaU20y_AEB_7F-0_HYT&response=${gRecaptchaResponse}&remoteip=${remoteIP}`
    }).then(function(response){
        return response.json()
    }).then(function (json){
        if(json.sucess===true){
            fetch("https://mailgun.com/v3/sandbox41d89455.mailgun.org/message",{
                method: 'POST',
                headers: {
                    'Authorization': 'Basic cGV0ZXJ1c2VAb2xkb3NuZXQ6cGV0ZXJ1c2VAb2xkb3NuZXQ='
                },
                body: JSON.stringify({
                    from: '',
                    to: ["uwasbruno256@gmail.com"],
                    subject: 'Contact From Message',
                    text:data
                })
            })
            .then(res => res.json())
            .then(json => console.log)
        }
    })
}) */

/* // Constants
const API_ENDPOINTS = {
    RECAPTCHA: 'https://www.goggle.com/recaptcha/api/siteverify',
    MAILGUN: 'https://mailgun.com/v3/sandbox41d89455.mailgun.org/message'
  };
  
  const API_KEYS = {
    RECAPTCHA_SECRET: '6Lfv0mcUAAAAAJ2KPt5G5HaU20y_AEB_7F-0_HYT',
    MAILGUN_AUTH: 'Basic cGV0ZXJ1c2VAb2xkb3NuZXQ6cGV0ZXJ1c2VAb2xkb3NuZXQ='
  };
  
  // Update year element
  document.querySelector(".year").innerHTML = new Date().getFullYear();
  
  // Get form element
  const form = document.querySelector("#contact-form");
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    // Validate form data
    if (!name ||!email ||!message) {
      console.error("Invalid form data");
      return;
    }
  
    // Construct data string
    const data = `Name:${name}\r\nEmail:${email}\r\nMessage:${message}`;
  
    // Send reCAPTCHA request
    try {
      const response = await fetch(API_ENDPOINTS.RECAPTCHA, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${API_KEYS.RECAPTCHA_SECRET}&response=${RecaptchaResponse}&remoteip=${remoteIP}`
      });
      const json = await response.json();
  
      if (json.success === true) {
        // Send Mailgun request
        try {
          const mailgunResponse = await fetch(API_ENDPOINTS.MAILGUN, {
            method: 'POST',
            headers: {
              'Authorization': API_KEYS.MAILGUN_AUTH
            },
            body: JSON.stringify({
              from: '',
              to: ["uwasbruno256@gmail.com"],
              subject: 'Contact From Message',
              text: data
            })
          });
          const mailgunJson = await mailgunResponse.json();
          console.log(mailgunJson);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      } else {
        console.error("reCAPTCHA verification failed");
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
    }
  }); */

  /* document.querySelector(".year").innerHTML = new Date().getFullYear();

const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the Values from the form
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const data = `Name:${name}\r\nEmail:${email}\r\nMessage:${message}`;

  // send email to my address
  fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=6Lfv0mcUAAAAAJ2KPt5G5HaU20y_AEB_7F-0_HYT&response=${gRecaptchaResponse}&remoteip=${remoteIP}`
  })
 .then(function(response) {
    return response.json();
  })
 .then(function(json) {
    if (json.success === true) {
      fetch("https://api.mailgun.net/v3/sandbox41d89455.mailgun.org/messages", {
        method: 'POST',
        headers: {
          'Authorization': 'Basic cGV0ZXJ1c2VAb2xkb3NuZXQ6cGV0ZXJ1c2VAb2xkb3NuZXQ=',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `from=&to=uwasbruno256@gmail.com&subject=Contact+From+Message&text=${data}`
      })
     .then(res => res.json())
     .then(json => console.log(json));
    }
  });
}); */

// Using the EmailJS library to send emails
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate user input
  if (!name ||!email ||!message) {
    alert('Please fill in all fields');
    return;
  }

  // Send email using EmailJS
  emailjs.send('service_hwegtnk', 'template_e3omqgm', {
    from_name: name,
    from_email: email,
    message: message,
  })
 .then((response) => {
    console.log('Email sent successfully:', response);
    alert('Email sent successfully!');
  })
 .catch((error) => {
    console.error('Error sending email:', error);
    alert('Error sending email. Please try again later.');
  });
});

/* function sendMail(){
    var params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_hwegtnk', 'template_e3omqgm', params).then(function(res){
        alert("Success " + res.status)
    })
} */