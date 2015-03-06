#!/bin/bash
cd markdown
for file in $(find blog-master -iname "*.md")
  do
  	pandoc $file -f markdown -t org -o ../org/${file}.org
done
