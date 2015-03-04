#!/bin/bash
cd markdown
for file in $(find . -iname "*.md")
  do
  	pandoc $file -f markdown -t org -o ../org/${file}.org
done