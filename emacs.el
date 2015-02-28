(add-to-list 'load-path "./elisp/org-20150209/")
(add-to-list 'load-path "./elisp/org-plus-contrib-20150209/")
(add-to-list 'load-path "./elisp/htmlize-20130208.402/")
(add-to-list 'load-path "./elisp/color-theme-20080305.34/")
(add-to-list 'load-path "./elisp/clojure-mode-20150114.248/")

(require 'color-theme)
(color-theme-initialize)
(color-theme-standard)
(require 'clojure-mode)
(clojure-font-lock-setup)
(require 'org)
(require 'ox-org)
(require 'ox-rss)
(require 'htmlize)
(setq blog-path (expand-file-name "org"))
(setq org-html-validation-link nil)
(setq org-confirm-babel-evaluate nil)
(defun set-org-publish-project-alist ()
  "Set publishing projects for Orgweb and Worg."
  (interactive)
  (setq org-publish-project-alist
    `(("blog-notes"
        ;; Directory for source files in org format
        :base-directory ,blog-path
        :base-extension "org"
        :html-doctype "html5"
        :html-head "<link rel=\"stylesheet\" href=\"/style/worg.css\" />"
        :html-html5-fancy t
        ;; HTML directory
        :publishing-directory "public"
        :publishing-function org-html-publish-to-html
        :recursive t
        :headline-levels 2
        :section-numbers nil
        :with-toc t
        :html-link-up "/index.html"
        :html-link-home "https://oyanglul.us/~jichao.ouyang.html"
        :auto-preamble t
        :html-postamble-format "%a %d" ;write author and date at end
        :auto-sitemap t
        :sitemap-title "Jichao Ouyang's Blog"
        :sitemap-filename "index"
        :auto-index t
        :index-filename "sitemap.org"
        :index-title "Jichao Ouyang's Blog"
        :index-function org-publish-org-index
        :sitemap-sort-files anti-chronologically
        :sitemap-file-entry-format "%t (%d)" ;write title and date in sitemap
        :html-head-include-default-style nil
        )

       ;; where static files (images, pdfs) are stored
       ("blog-static"
         :base-directory "./org/"
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
         :publishing-directory "../public"
         :recursive t
         :publishing-function org-publish-attachment
         )
       ("blog-rss"
         :base-directory ,blog-path
         :base-extension "org"
         :rss-image-url "http://steckerhalter.co.vu/img/steckerhalter.png"
         :publishing-directory "public"
         :publishing-function org-rss-publish-to-rss
         :section-numbers nil
         :html-link-home "https://blog.oyanglul.us/"
         :html-link-use-abs-url t
         :with-toc nil
         :exclude ".*"
         :include ("index"))
       ("blog" :components ("blog-notes" "blog-static"))
       ))
(set-org-publish-project-alist)
