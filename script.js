document.getElementById('mint-form').addEventListener('submit', function(e) {
    e.preventDefault();
    generateFrame();
});

function generateFrame() {
    const title = document.getElementById('mint-title').value;
    const imageUrl = document.getElementById('mint-image').value;
    const description = document.getElementById('mint-description').value;

    document.getElementById('frame-title').textContent = title;
    document.getElementById('frame-image').src = imageUrl;
    document.getElementById('frame-description').textContent = description;

    document.getElementById('frame-container').classList.remove('hidden');

    // Here you can add the logic to post the generated frame to Warpcast using their API
    // For example:
    // postToWarpcast(title, imageUrl, description);
}

// Example function to post to Warpcast (dummy implementation)
function postToWarpcast(title, imageUrl, description) {
    const postData = {
        title: title,
        image: imageUrl,
        description: description
    };

    fetch('https://warpcast-api-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
