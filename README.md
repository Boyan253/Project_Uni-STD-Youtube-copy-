# YouTube Clone

A simple YouTube clone built with HTML, CSS, and JavaScript. This project mimics the YouTube layout and functionality with features like video embedding, navigation, search, and user interactions.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Overview
This YouTube clone replicates the core functionality and layout of YouTube, providing users with a simple interface for video browsing, navigation, and playback. The project utilizes the `video.js` library and the `YouTube` plugin to embed and control YouTube videos directly on the page.

## Features
- **Responsive Design**: The layout adapts to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.
- **Video Embedding**: YouTube videos are embedded using the `video.js` player with the YouTube plugin for direct playback.
- **Search Functionality**: Users can search for videos (though additional functionality for live search can be implemented).
- **Navigation**: Sidebar navigation includes sections like Home, Trending, Subscriptions, Library, History, and more.
- **User Greeting**: A personalized greeting is displayed to the user (can be dynamically set based on user session).
- **Material Icons**: The project uses Material Icons for a modern and consistent interface.

## Project Structure
The project consists of the following files:

. ├── index.html # Main HTML file for the layout and structure ├── Home.css # Stylesheet for the design and layout ├── Home.js # JavaScript for handling user interactions and dynamic content ├── video.js # Video.js library for video embedding and playback └── Youtube.min.js # YouTube plugin for video.js integration

markdown
Копиране
Редактиране

### External Libraries Used:
- **video.js**: A JavaScript library used for embedding and controlling videos.
- **videojs-youtube**: A plugin that enables YouTube video playback within the video.js player.
- **Material Icons**: A library of icons used for visual elements in the app.

## Installation
To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/boyan253/Project_Uni-STD-Youtube-copy
Navigate to the project folder:

bash
Копиране
Редактиране
cd youtube-clone
Open the project in a browser: Simply open index.html in any web browser to start using the YouTube clone.

For example, you can drag the file into Chrome or Firefox, or use an IDE like VS Code with live server support.

Usage
Upon loading the page, the user will be greeted with a personalized message (this can be dynamically updated based on a login system in a real-world app).
Users can navigate through sections such as Home, Trending, Subscriptions, and others using the sidebar.
Videos are displayed with thumbnails, titles, and view counts, similar to the YouTube interface.
Clicking on a video will play it using the embedded video.js player, which automatically loads and plays YouTube videos.
The search bar (currently static) can be used to enter search queries, and future implementations can be added to filter videos dynamically.
License
This project is open-source and available under the MIT License.

Future Enhancements
Implement search functionality that filters videos dynamically.
Add user authentication and personalization features.
Implement video upload and comment systems.
Integrate live streaming functionality.
Feel free to contribute to this project by opening issues or submitting pull requests.
