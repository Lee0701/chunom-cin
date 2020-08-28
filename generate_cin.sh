#!/bin/bash
cat header.txt
echo '%chardef begin'
cat chardef_base
cat chardef_generated
cat keymap/keymap_$1.txt
echo '%chardef end'