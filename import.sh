#!/bin/bash
for file in $(find blog-master -iname "*.md")
  do
  	pandoc $file -f markdown -t org -o ${file}.org
    cp ${file}.org org/
done

cp -r blog-master/org/* org/
