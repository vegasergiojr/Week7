const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine0', 'mustache')

let trips = [{ title: "hawaii", image: "imageUrl", departureDate: "depDate", returnDate: "retDate" }]

app.get('/trips', (req, res) => {
    res.render('trips', { allTrips: trips })
})
app.get('/add-trips', (req, res) => {
    res.render('add-trips')
})
app.post('add-trips', (req, res) => {
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const depDate = req.body.depDate
    const retDate = req.body.retDate

    trips.push({ id: trips.length + 1, title: title, image: imageUrl, departureDate: depDate, returnDate: retDate })
    res.redirect('/trips')
})

app.listen(3000, () => {
    console.log('Server is running...')
})