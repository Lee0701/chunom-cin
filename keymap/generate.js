
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
    const toMap = (entries) => entries.reduce((a, c) => (a[c[0]] = a[c[0]] || c[1], a), {})
    const data = lines.split('\n')
            .map((line) => line.trim())
            .filter((line) => line !== '')
            .map((line) => line.split('\t'))
    const keySeqToChar = toMap(data)
    const charToKeySeq = toMap(data.map(([keySeq, char]) => [char, keySeq]))
    const result = {keySeqToChar, charToKeySeq}
    console.log(JSON.stringify(result, null, 2))
})
