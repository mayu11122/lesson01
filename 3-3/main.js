const row = Number(process.argv[2])

for (let i = 0; i < row; i++) {
    let str = ""
    str = ' '.repeat(row - i - 1)
    str += '*'.repeat(i * 2 + 1)
    console.log(str)
}

