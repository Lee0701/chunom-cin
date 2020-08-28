## .cin Input Method Plugin Generator for Chữ Nôm

### Requirements
* bash shell
* Node.js

### Process
1. Download base dictionary from [here](https://www.chunom.org/entry/base_chars/)
1. run `node convert.js < base_chars > converted` to convert dictionary
1. run `node generate_chardef.js [vni|telex] < converted > chardef` to generate charmap
1. run `echo '' > chunom.cin && cat header.txt >> chunom.cin && cat chardef >> chunom.cin`
1. result is stored in `chunom.cin`