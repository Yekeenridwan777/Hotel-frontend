// Booking form logic
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page reload

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const room = document.getElementById("room").value;
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;

      // Show confirmation message
      alert(
        `🎉 Booking Confirmed!\n\nGuest: ${name}\nEmail: ${email}\nRoom: ${room}\nCheck-In: ${checkin}\nCheck-Out: ${checkout}`
      );

      // Reset form
      bookingForm.reset();
    });
  }
});
// Contact form logic
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cname").value;
      const email = document.getElementById("cemail").value;
      const message = document.getElementById("cmessage").value;

      alert(`📩 Thank you, ${name}! Your message has been sent.\n\nWe’ll reply to: ${email}`);

      contactForm.reset();
    });
  }
});
