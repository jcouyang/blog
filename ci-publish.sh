#!/bin/sh
export NAME='Jichao Ouyang'
git clone git@github.com:jcouyang/blog.git -b gh-pages public
cask exec emacs --batch -l emacs.el -f org-publish-all
# run it again for archive.org
cask exec emacs --batch -l emacs.el -f org-publish-all
