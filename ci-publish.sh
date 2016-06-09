#!/bin/sh
export NAME='Jichao Ouyang'
export PATH="/home/ubuntu/.cask/bin:$PATH"
git clone git@github.com:jcouyang/blog.git -b gh-pages public
cask exec emacs --batch -l emacs.el -f org-publish-all
# run it again for archive.org
cask exec emacs --batch -l emacs.el -f org-publish-all
cd public
git config --global user.name "circle ci"
git config --global user.email "oyanglulu@gmail.com"
git add .
git commit -m "auto publi:ship: [ci skip]"
git push origin gh-pages
