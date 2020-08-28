
const fs = require('fs')
const readline = require('readline')
const reader = readline.createInterface({input: process.stdin})

const loadKeymap = (path) => fs.readFileSync(path).toString().split('\n')
        .map((line) => line.split(' '))
        .filter((entry) => entry.length >= 2)
        .reduce((a, [v, k]) => (a[k] = a[k] || v, a), {})

const KEYMAPS = {
    'vni': loadKeymap('./keymap/keymap_vni.txt'),
    'telex': loadKeymap('./keymap/keymap_telex.txt'),
}

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
    const keySeq = (s) => s.split('').map(c => keymap[c] || c).join('')
    return data.map(([key, value]) => `${keySeq(key)} ${value}`).join('\n')
}
