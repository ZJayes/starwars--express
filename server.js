const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
        routeName: 'yoda'
    },
    {
        name: 'Luke Skywalker',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 40,
        avatar: 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg',
        routeName: 'luke skywalker'
    },
    {
        name: 'Princess Leia',
        role: 'Princess General',
        forcePoints: 100,
        age: 40,
        avatar: 'https://grazia.wwmindia.com/content/2020/may/hairleiabunsthumbnail1588581290.jpg',
        routeName: 'princess leia'
    },
]

app.get('/', (req, res) => {
    res.send('May the force be with you!')
})


// /api/characters - show all character data
app.get('/api/characters', (req, res)  => {
res.json(characters)
})

// /api/characters/:routename




app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`)
})