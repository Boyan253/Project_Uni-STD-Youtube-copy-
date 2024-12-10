const express = require('express');
const router = express.Router();
const Video = require('../models/Video'); 

router.post('/', async (req, res) => {
    const { link, title, username } = req.body; 

    try {
        const newVideo = new Video({
            link,
            title,
            username,
        });

        await newVideo.save();
        res.status(201).json({ message: 'Video created successfully!', video: newVideo });
    } catch (error) {
        res.status(500).json({ message: 'Error saving video', error });
    }
});
router.get('/allVideos', async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error });
    }
});


module.exports = router;
