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
(require 'htmlize)
;; to have things work correctly in batch-mode
(setq org-html-validation-link nil)
(setq org-publish-project-alist
  '(("blog-notes"
      ;; Directory for source files in org format
      :base-directory "~/Dropbox/Public/blog/org/"
      :base-extension "org"
      :html-doctype "html5"
      :html-head "<link rel=\"stylesheet\" href=\"/style/worg.css\" />"
      :html-html5-fancy t
      ;; HTML directory
      :publishing-directory "~/Dropbox/Public/blog/public"
      :publishing-function org-html-publish-to-html
      :recursive t
      :headline-levels 2
      :section-numbers nil
      :with-toc t
      :html-link-up "/index.html"
      :html-link-home "/~jichao.ouyang.html"
      :auto-preamble t
      :html-postamble-format "%a %d" ;write author and date at end
      :auto-sitemap t
      :sitemap-title "Jichao Ouyang's Blog"
      :sitemap-filename "index"
      :sitemap-sort-files anti-chronologically
      :sitemap-file-entry-format "%t (%d)" ;write title and date in sitemap
      :html-head-include-default-style nil
      )

     ;; where static files (images, pdfs) are stored
     ("blog-static"
       :base-directory "~/Dropbox/Public/blog/org"
       :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
       :publishing-directory "~/Dropbox/Public/blog/public"
       :recursive t
       :publishing-function org-publish-attachment
       )

     ("blog" :components ("blog-notes" "blog-static"))
     ))
