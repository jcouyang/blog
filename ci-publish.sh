#!/bin/sh
git clone git@github.com:jcouyang/blog.git -b source org
git clone git@github.com:jcouyang/blog.git -b gh-pages public
emacs --batch -l emacs.el -f org-publish-all