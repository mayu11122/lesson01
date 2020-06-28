const fs = require('fs')
const array = JSON.parse(fs.readFileSync('./kobe.json', 'utf8'))

function isKey(file) {
    let keys = Object.keys(file)

    for (let key of keys) {

        if (key === 'kobe') {
            console.log(file[key])

        } else {
            isKey(file[key])
        }
    }

}

isKey(array) 