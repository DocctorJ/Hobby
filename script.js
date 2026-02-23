```javascript
// ==========================================
// CONTACT FORM HANDLING
// ==========================================

function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Validate fields (check they're not empty)
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("⚠️ Please fill out all fields!");
    return;
  }

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Please enter a valid email address!");
    return;
  }

  // Show success message
  const successMsg = document.getElementById("successMessage");
  successMsg.classList.remove("hidden");

  // Clear form
  document.getElementById("contactForm").reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMsg.classList.add("hidden");
  }, 5000);

  // Log submission to console (for testing)
  console.log("Form submitted:", { name, email, subject, message });
}
```

```javascript
// ==========================================
// GALLERY MODAL
// ==========================================

function openGalleryModal(element) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  modal.classList.add("show");
  modalImg.src = element.src;
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("show");
}

// Close modal when pressing ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeGalleryModal();
  }
});

function recordAnswer(answer) {
  const resultDiv = document.getElementById("quizResult");
  const responses = {
    Fun: "🎉 Great choice! Life is too short not to have fun!",
    Relaxing: "😌 Absolutely! Taking time to relax is important.",
    Creative: "🎨 Creativity is amazing! Keep expressing yourself!",
    Social: "👥 Community makes everything better!",
  };
  resultDiv.textContent = responses[answer];
  resultDiv.style.color = "white";
}
```

