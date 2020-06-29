const fs = require('fs')
const jsonObject = JSON.parse(fs.readFileSync('./user.json', 'utf8'))

let total = []
for (let i = 0; i < jsonObject.users.length; i++) {
    let ranks = jsonObject.users[i].rank
    let year = jsonObject.users[i].years
    total.push(jsonObject.users[i])
    if (ranks === 'A' && year < 5) {
        total[i].salary = 3000 * year + 100000
    } else if (ranks === 'A' && year >= 5) {
        total[i].salary = 3000 * year + 120000
    } else if (ranks === 'B') {
        total[i].salary = 4000 * year + 140000
    } else {
        total[i].salary = 5000 * year + 160000
    }
}

let salarynum = []
for (let i = 0; i < total.length; i++) {
    salarynum.push(total[i].salary)
    salarynum.sort(
        function (a, b) {
            return (a > b ? -1 : 1)
        }
    )
}


for (let i = 0; i < salarynum.length; i++) {
    for (let j = 0; j < jsonObject.users.length; j++) {
        if (salarynum[i] === jsonObject.users[j].salary) {
            console.log(jsonObject.users[j].name + ':' + salarynum[i])
        }
    }
}
