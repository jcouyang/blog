#!/bin/bash
cp -r blog-master/org/* org/

for file in $(find org -iname "*.md")
  do
      pandoc $file -f markdown -t org -o ${file}.org
      touch -r $file ${file}.org
done

ls -al org/
ls -al org/markdown/


