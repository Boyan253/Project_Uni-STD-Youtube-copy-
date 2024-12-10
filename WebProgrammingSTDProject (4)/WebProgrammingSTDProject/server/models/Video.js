const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    link: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now }, 
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
