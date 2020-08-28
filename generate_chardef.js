
const readline = require('readline')
const reader = readline.createInterface({input: process.stdin})

const KEYMAPS = {
    'vni': require('./keymap/vni.json'),
    'telex': require('./keymap/telex.json'),
}
const CHARDEF_BEGIN = '%chardef begin'
const CHARDEF_END = '%chardef end'

const args = process.argv.slice(2)
const keymapName = args.pop()

let lines = ''
reader.on('line', (line) => {
    lines += line + '\n'
})
reader.on('close', () => {
    const json = JSON.parse(lines)
    const result = generateChardef(json, KEYMAPS[keymapName])
    console.log(result)
})

const generateChardef = (data, keymap) => {
    const keySeq = (s) => s.split('').map(c => keymap.charToKeySeq[c] || c).join('')
    const result = []
    result.push(CHARDEF_BEGIN)
    result.push(generateKeymapChardef(keymap))
    result.push(data.map(([key, value]) => `${keySeq(key)}\t${value}`).join('\n'))
    result.push(CHARDEF_END)
    return result.join('\n')
}

const generateKeymapChardef = (keymap) => {
    return Object.entries(keymap.keySeqToChar)
            .map(([keySeq, char]) => `${keySeq}\t${char}`)
            .join('\n')
}
