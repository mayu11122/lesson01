const fs = require('fs')
const jsonObject = JSON.parse(fs.readFileSync('./playdata.json', 'utf8'))
const object2 = JSON.parse(fs.readFileSync('./songs.json', 'utf8'))

jsonObject.data.sort(function (a, b) {
    if (Number(a.count) < Number(b.count)) {
        return 1
    } else {
        return -1
    }

})

for (let i = 0; i < object2.songs.length; i++) {
    for (let j = 0; j < jsonObject.data.length; j++)
        if (object2.songs[i].id === Number(jsonObject.data[j].id)) {
            title = object2.songs[i].title
            console.log('順位:' + i + '位' + title + '\t' + jsonObject.data[j].count)
        }

}

