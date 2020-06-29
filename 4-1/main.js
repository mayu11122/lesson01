let array = []

for (let i = 2; i < process.argv.length; i++) {
    array.push(Number(process.argv[i]))
}

array.sort(function (a, b) {
    return b - a;
})

console.log(array[2])

