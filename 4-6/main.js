let arr = process.argv.slice(2)
let array = arr[0]

const result = array.split(':')

let hour = Number(result[0])
let min = Number(result[1])

if (min + 45 < 60) {
    console.log(hour)
    console.log(min + 45)

} else {
    hours = hour + 1
    if (hours === 24 || hours > 24) {
        console.log(hours % 24)
    } else {
        console.log(hours + 1)
    }
    console.log(min + 45 - 60)
}
