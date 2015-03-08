#!/bin/bash
cp -r blog-master/org/* org/

for file in $(find blog-master -iname "*.md")
  do
      pandoc $file -f markdown -t org -o ${file}.org
      touch -r $file ${file}.org
done


