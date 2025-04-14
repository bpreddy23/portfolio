(function () {
  emailjs.init("gaaEwvRpsTAABsNBj");
})();

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      feedback: document.getElementById("subject").value,
      rating: document.getElementById("Message").value,
  };

  emailjs.send("service_lydqu0t", "template_quk5w6o", params)
      .then(() => {
          // Show thank-you message
          document.querySelector(".form-container form").style.display = "none";
          document.querySelector(".thank-you").style.display = "block";

          // Redirect to index page after 3 seconds
          setTimeout(() => {
              window.location.href = "index.html";
          }, 3000);
      })
      .catch((error) => {
          console.error("Failed to send feedback:", error);
          alert("Something went wrong. Please try again later.");
      });
});