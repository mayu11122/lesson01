for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log('W')
    } else if (String(i).match('3')) {
        console.log('WOW')
    } else {
        console.log(i)
    }
}
