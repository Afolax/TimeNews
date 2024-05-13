const Blog = require('../models/blogs')


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('blogs/index', {title: 'Newslists', blogs: result})  
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_detail = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/detail', {blog: result, title: 'News Details'})
        }).
        catch((err) => {
            console.log(err)
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title: 'Write News'})
}

const blog_create_post = (req, res) => {
    const news = new Blog(req.body)

    news.save()
        .then((result) => {
           res.redirect('/blogs') 
        })
        .catch((err) => {
            console.log(err)
        })
}

const blog_edit_get = (req, res) => {
    const id = req.params.id
    Blog.findOne({_id: id})
        .then((result) => {
            res.render('blogs/edit', {blog: result, title: 'News Edit'})
        }).
        catch((err) => {
            console.log(err)
        })
}

const blog_edit_post = (req, res) => {

    Blog.findByIdAndUpdate(req.params.id, req.body)
    
    .then((result) => {
        res.redirect(`/blogs/${result._id}`)
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_edit_get,
    blog_edit_post,
    blog_delete
}