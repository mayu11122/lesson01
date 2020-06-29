const fs = require('fs')
const playdata = JSON.parse(fs.readFileSync('./playdata.json', 'utf8'))
const songsfile = JSON.parse(fs.readFileSync('./songs.json', 'utf8'))

playdata.data.sort(function (a, b) {
    return b.count - a.count
})

let title
let count
for (let i = 0; i < playdata.data.length; i++) {
    for (let j = 0; j < songsfile.songs.length; j++) {
        if (Number(playdata.data[i].id) === songsfile.songs[j].id) {
            title = songsfile.songs[j].title
        }
    }
    count = playdata.data[i].count
    console.log('順位:' + (i + 1) + '位\t' + title + '\t' + count)
}

