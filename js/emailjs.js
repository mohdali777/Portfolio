(function() {
    emailjs.init("UHxeko7QuDVCdSqfY");  
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!name) {
  return iziToast.error({
    title: "Error",
    message: "Please fill in the Name field",
    position: "topRight"
  });
}

if (!email) {
  return iziToast.error({
    title: "Error",
    message: "Please fill in the Email field",
    position: "topRight"
  });
}

if (!emailPattern.test(email)) {
  return iziToast.error({
    title: "Invalid Email",
    message: "Please enter a valid email address",
    position: "topRight"
  });
}

if (!message) {
  return iziToast.error({
    title: "Error",
    message: "Please enter your message",
    position: "topRight"
  });
}

    const templateParams = {
      name: name,
      email: email,
      message: message
    };
    emailjs.send("service_5gmkbu8", "template_40qqmkn", templateParams)
      .then(function(response) {
        iziToast.success({
        title: "Sent",
        message: "Your message has been sent successfully!",
        position: "topRight"
      });
      name.value = " ";
      email.value = " ";
      message.value = " ";
      }, function(error) {
        console.log("FAILED", error);
      iziToast.error({
        title: "Failed",
        message: "Message not sent. Try again later.",
        position: "topRight"
      });
      });
  });