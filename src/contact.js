export default function loadContact() {
  const content = document.getElementById("content");

  const container = document.createElement("div");

  container.innerHTML = `
    <div class="contact-header">
      <h2>Contact and Enquires</h2>
    </div>
    
    <div class="contact-intro">
    <h2>Get in Touch</h2>
    <p>We would love to hear from you! Whether you have questions about our menu, want to make a reservation, or just want to say hello, please don't hesitate to reach out. Our team is here to assist you and ensure your experience with Verde & Vino is exceptional from start to finish.</p>
    <p> Please use the below form to get in touch with us. Your satisfaction is our utmost pleasure :)!
    </div>


    <div class="contact-container">
      <div class="reservation-form">
        
        <form onsubmit="event.preventDefault(); alert('Reservation Submitted!');">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Email Address" required>
          <input type="tel" placeholder="Phone Number" required>
          <div class="form-row">
            <input type="date" required>
            <input type="time" required>
          </div>
          <select required>
            <option value="" disabled selected>Party Size</option>
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
            <option>5+ People</option>
          </select>
          <textarea placeholder="Special Requests" rows="10"></textarea>
          <button type="submit" class="contact-form-btn">Make Reservation</button>
        </form>
      </div>
    </div>
  `;

  content.appendChild(container);
}
