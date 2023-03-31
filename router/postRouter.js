import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import post from './mongodb.js'
cloudinary.config({
    cloud_name: "dt4sakzyd",
    api_key: "281242171732925",
    api_secret: "51Exh_mackzx0mjqlFBmey_ntGw"
});
const router = express.Router()
router.route('/').get(async (req, res) => {
    const posts = await post.find({});
    res.json(posts)
});
router.route('/').post(async (req, res) => {
    const { name, prompt, photo } = req.body;
    try {
        const photoUrl = await cloudinary.uploader.upload(photo, {public_id:name});
        const newPost = await post.create({
            name: 'name',
            prompt: 'prompt',
            photo: photo,
        });
        res.status(200).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
});
export default router
