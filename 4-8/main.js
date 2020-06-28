const str = "こはるはるここはるここはるはるここはるこはるはるはる"
const word1 = 'こはる'
const word2 = 'はるこ'

const length1 = []
const length2 = []

for (let i = 0; i < str.length; i++) {
    let words = str[i] + str[i + 1] + str[i + 2]
    if (words === word1) {
        length1.push(i)
    } else if (words === word2) {
        length2.push(i)
    }
}

console.log('こはる:' + length1.length)
console.log('はるこ:' + length2.length)