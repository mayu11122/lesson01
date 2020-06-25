const students = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60]

let box = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < students.length; i++) {
    box[Math.floor(students[i] / 10)]++
}


for (let j = 0; j < box.length; j++) {
    if (box[j] === Math.max.apply(null, box)) {
        box.push('*')
    } else if (box[j] === Math.max.apply(null, box) - 1) {
        box.replace('*')
    } else if (box[j] === Math.max.apply(null, box) - 1) {
        box.push('*')
    }
}

console.log(box)
