#!/bin/sh
export NAME='Jichao Ouyang'
git clone git@github.com:jcouyang/blog.git -b gh-pages public
emacs --batch -l emacs.el -f org-publish-all
