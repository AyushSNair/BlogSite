const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs');

// Home route
router.get('/', (req, res) => {
    res.render('home'); // Render the Handlebars template for the home page
});

// Blog list route
router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs, // Pass the blogs array to the template
    });
});

// Blog post route
router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    res.sendFile(path.join(__dirname,'../template/blogPage.html'))
});

module.exports = router;
