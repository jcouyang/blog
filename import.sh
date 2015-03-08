#!/bin/bash
wget https://github.com/jcouyang/blog/archive/master.zip
unzip master.zip
rm -rf org
ls -al blog-master
mv blog-master/org org

for file in $(find org -iname "*.md")
  do
      pandoc $file -f markdown -t org -o ${file}.org
      touch -r $file ${file}.org
      echo "convert markdown $file into org"
done

ls -al org/
ls -al org/markdown/


