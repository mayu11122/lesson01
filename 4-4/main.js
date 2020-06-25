array = []

for (let i = 0; i < 10; i++) {
    array.push(i)
}

for (let i = array.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]]
}

console.log(array)
