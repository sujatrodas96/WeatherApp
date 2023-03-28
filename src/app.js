const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

// const htmlpath = path.join(__dirname, "../templates/views");
const newpath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, '../templates/partials');



app.set("view engine", "hbs");
app.set("views", newpath);
hbs.registerPartials(partialpath);

// app.use(express.static(htmlpath));
app.use(express.static(path.join(__dirname, 'public')));


app.get("", (req, res) => {
    res.render('index.hbs');
})

app.get("/about", (req, res) => {
    res.render('about.hbs');
})

app.get("/weather", (req, res) => {
    res.render('weather.hbs');
})

app.get("*", (req, res) => {
    res.render("404", {
        errormsg:'Oops! Page Not Found'
    })
})

app.listen(port, () => {
    console.log(`listing to port ${port}`);
})