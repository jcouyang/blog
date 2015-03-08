#!/bin/bash
rm -rf org
mv blog-master/org org
ls -al org

for file in $(find org -iname "*.md")
  do
      pandoc $file -f markdown -t org -o ${file}.org
      touch -r $file ${file}.org
      echo "convert markdown $file into org"
done

ls -al org/
ls -al org/markdown/


