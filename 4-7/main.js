let argv = []
argv.push(process.argv[2])
let element = process.argv[3]

let array = argv[0].split(',')
let result = []

for (let i = 0; i < array.length; i++) {
    let array = argv[0].split(',')
    array = array[i].toLowerCase()
    result.push(array)
}

for (let i = 0; i < result.length; i++) {
    let discri = result[i].indexOf(element)
    if (discri !== -1) {
        console.log(result[i])
    }
}
