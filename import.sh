#!/bin/bash
cd markdown
for file in $(find . -iname "*.md")
  do
  	pandoc $file -f markdown_github -t org -o ../org/${file}.org
done