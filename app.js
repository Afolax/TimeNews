const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const methodOverride = require('method-override')

const app = express()

const dbURI = 'mongodb+srv://blogsproject:test1234@cluster0.f7ncump.mongodb.net/blogproject?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

// app.listen(3000)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())


app.get('/', (req,res) => {
   res.redirect('/blogs')
});

app.get('/contact', (req,res) => {
    res.render('contact', {title: 'Contact'})
});

app.get('/about', (req,res) => {
    res.render('about', {title: 'About'})
});

app.use('/blogs', blogRoutes)

app.use((req, res) =>{
    res.status(404).render('404', {title: '404 page'})
})