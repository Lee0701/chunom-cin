
const readline = require('readline')
const reader = readline.createInterface({input: process.stdin})

const BEGIN_TABLE = 'BEGIN_TABLE'
const END_TABLE = 'END_TABLE'

let beginTable = false
let lines = ''
reader.on('line', (line) => {
    if(line === BEGIN_TABLE) beginTable = true
    else if(line === END_TABLE) beginTable = false
    else if(beginTable) lines += line + '\n'
})
reader.on('close', () => {
    const data = lines.split('\n')
            .map((line) => line.trim())
            .filter((line) => line !== '')
            .map((line) => line.split('\t'))
    const charToKeySeq = data.map(([keySeq, char]) => [keySeq, char])
    const result = charToKeySeq.map(([char, keySeq]) => `${char} ${keySeq}`).join('\n')
    console.log(result)
})
