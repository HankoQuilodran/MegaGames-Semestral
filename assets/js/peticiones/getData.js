document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Send POST request
    fetch('https://id.twitch.tv/oauth2/token?client_id=9hiwdjcrvvhqupg8tluez23tdpe1tv&client_secret=91vdzp2rkzfljvuqbqozge9m0sb4qo&grant_type=client_credentials', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API Response:', data);
        // Handle response data as needed
    })
    .catch(error => {
        console.error('There was a problem with the POST request:', error);
    });
});