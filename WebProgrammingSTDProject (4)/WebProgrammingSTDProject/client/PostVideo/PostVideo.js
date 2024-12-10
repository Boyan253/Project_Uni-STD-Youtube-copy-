document.getElementById('videoForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const videoLink = document.getElementById('videoUrl').value.trim();
    const videoTitle = document.getElementById('videoTitle').value.trim();
    const username = document.getElementById('videoAuthor').value.trim();
    const videoId = extractVideoID(videoLink); // Function to extract video ID from the URL

    if (videoId) {
        try {
            const response = await fetch('http://localhost:5000/post/video/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Optional: Use if you have JWT authentication
                },
                body: JSON.stringify({ link: videoLink, title: videoTitle, username: username }),
            });

            const data = await response.json();
            if (response.ok) {
                document.getElementById('videoList').innerText = 'Video added successfully!';
                setTimeout(() => {
                    window.location.href = '../Home/Home.html'; // Redirect to homepage after success
                }, 1500);
            } else {
                document.getElementById('videoList').innerText = data.message || 'Failed to add video.';
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('videoList').innerText = 'Something went wrong. Please try again.';
        }
    } else {
        document.getElementById('videoList').innerText = 'Please enter a valid YouTube video link.';
    }
});

function extractVideoID(url) {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
}
