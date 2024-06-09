document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const emergency = document.getElementById('emergency').value;
        
        const bookingData = { name, contact, emergency };
        
        fetch('backend/book_ambulance.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Ambulance booked successfully!');
                // Initialize map tracking here
            } else {
                alert('Failed to book ambulance');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Initialize map tracking
    function initMap() {
        // Placeholder for map initialization code
        // For example, using Google Maps API or Leaflet.js
    }

    initMap();
});
