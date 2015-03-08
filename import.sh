#!/bin/bash
for FILE in $(git ls-files)
do
    TIME=$(git log --pretty=format:%cd -n 1 --date=iso $FILE)
    TIME=$(date -j -f '%Y-%m-%d %H:%M:%S %z' "$TIME" +%Y%m%d%H%M.%S)
    touch -m -t $TIME $FILE
done

for file in $(find org -iname "*.md")
  do
      pandoc $file -f markdown -t org -o ${file}.org
      touch -r $file ${file}.org
      echo "convert markdown $file into org"
done

ls -al org/
ls -al org/markdown/


