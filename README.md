## .cin Input Method Plugin Generator for Chữ Nôm

### Requirements
* bash shell
* Node.js

### Process
1. Download base chars dictionary from [here](https://www.chunom.org/entry/base_chars/) and generated chars dictionary from [here](https://www.chunom.org/entry/generated_chars/)
1. run `node convert.js < base_chars > converted_base` to convert base chars dictionary
1. run `node convert.js < generated_chars > converted_generated` to convert generated chars dictionary
1. run `node generate_chardef.js [vni|telex] < converted_base > chardef_base` to generate base charmap
1. run `node generate_chardef.js [vni|telex] < converted_generated > chardef_generated` to generate generated charmap
1. run `./generate_cin.sh > chunom.cin`
1. result is stored in `chunom.cin`