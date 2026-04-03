
const songModel = require('../models/song.model');
const storageService = require('../services/storage.service');
const id3 = require('node-id3');

const uploadToStorage = ({ buffer, filename, folder }) =>
    storageService.uploadFile({ buffer, filename, folder });

async function uploadSongController(req, res) {
    try {
        if (!req.file?.buffer) {
            return res.status(400).json({ success: false, message: 'No song file provided' });
        }

        const { mood } = req.body;
        const songBuffer = req.file.buffer;
        const tags = id3.read(songBuffer) || {};

        const title = (tags.title || 'untitled').replace(/[\/\\?%*:|"<>]/g, '').trim() || 'untitled';
        const songFilename = `${title}.mp3`;
        const posterFilename = `${title}.jpg`;

        const songUpload = uploadToStorage({
            buffer: songBuffer,
            filename: songFilename,
            folder: '/moodify/songs'
        });

        const posterUpload = tags.image?.imageBuffer
            ? uploadToStorage({
                    buffer: tags.image.imageBuffer,
                    filename: posterFilename,
                    folder: '/moodify/posters'
                })
            : Promise.resolve({ url: null });

        const [songFile, posterFile] = await Promise.all([songUpload, posterUpload]);

        const song = await songModel.create({
            title,
            url: songFile.url,
            posterUrl: posterFile.url,
            mood
        });

        res.status(201).json({
            success: true,
            message: 'Song uploaded successfully',
            song
        });
    } catch (error) {
        console.error('uploadSongController', error);
        res.status(500).json({
            success: false,
            message: 'Could not upload song',
            error: error.message
        });
    }
}


async function getSong(req,res){

const {mood} = req.query;

const song= await songModel.find({mood});

res.status(200).json({
    message:'Songs fetched successfully',
    song
});
}
module.exports = { uploadSongController, getSong };