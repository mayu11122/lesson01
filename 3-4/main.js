const arg1 = process.argv[2]
const arg2 = process.argv[3]

const array = []
const array2 = []
const array3 = []
for (let i = 0; i < arg1.length; i++) {
    array.push(arg1[i])
}
for (let i = 1; i < arg1.length + 1; i++) {
    array2.push(array.pop())
}

for (let i = 0; i < arg2.length; i++) {
    array.push(arg2[i])
}
for (let i = 1; i < arg2.length + 1; i++) {
    array3.push(array.pop())
}

const inver1 = Number(array2.join(''))
const inver2 = Number(array3.join(''))
console.log(inver1 + inver2)