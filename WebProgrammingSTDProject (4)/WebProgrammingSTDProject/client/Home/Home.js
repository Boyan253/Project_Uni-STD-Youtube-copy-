document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');

    if (username) {
        usernameDisplay.textContent = username; 
    } else {
        usernameDisplay.textContent = 'Guest'; 
    }
});
async function fetchVideos() {
    try {
        const response = await fetch('http://localhost:5000/post/video/allVideos'); 
        const videos = await response.json();

        const videosDiv = document.querySelector('.videos'); 

        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'video';
            videoElement.innerHTML = `
                <div class="thumbnail">
                    <video
                        id="my-video"
                        class="video-js vjs-default-skin"
                        controls
                        preload="auto"
                        width="100%"
                        height="auto"
                        data-setup='{"techOrder": ["youtube"], "sources": [{"type": "video/youtube", "src": "${video.link}"}]}'
                    ></video>
                </div>
                <div class="details">
                    <div class="author">
                        <img src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj" alt="Author" />
                    </div>
                    <div class="title">
                        <h3>${video.title}</h3>
                        <a href="#">${video.username}</a> <!-- Assuming username is stored in video object -->
                        <span>0 Views • Just Now</span> <!-- Update this as needed -->
                    </div>
                </div>
            `;
            videosDiv.appendChild(videoElement); 
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}


document.addEventListener('DOMContentLoaded', fetchVideos);
