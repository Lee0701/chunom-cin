
const readline = require('readline')
const reader = readline.createInterface({input: process.stdin})

let lines = ''
reader.on('line', (line) => {
    lines += line + '\n'
})
reader.on('close', () => {
    const json = JSON.parse(lines)
    const dict = convertDict(json.dict)
    console.log(JSON.stringify(dict))
})

const convertDict = (dict) => {
    return dict.split('|')
            .map((entry) => entry.split(':'))
            .filter((entry) => entry.length >= 2)
            .map(([key, value]) => value.split(',').map((v) => [key.toLowerCase(), v]))
            .flat()
}
