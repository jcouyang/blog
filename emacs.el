(add-to-list 'load-path "~/.emacs.d/elpa/org-20150209/")
(add-to-list 'load-path "~/.emacs.d/elpa/org-plus-contrib-20150209/")
(add-to-list 'load-path "~/.emacs.d/elpa/htmlize-20130208.402/")
(add-to-list 'load-path "~/.emacs.d/elpa/color-theme-20080305.34/")
(add-to-list 'load-path "~/.emacs.d/elpa/color-theme-sanityinc-tomorrow-20140906.1832/")
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(ansi-color-names-vector
   [("black" . "#8a8888")
    ("#EF3460" . "#F25A7D")
    ("#BDEF34" . "#DCF692")
    ("#EFC334" . "#F6DF92")
    ("#34BDEF" . "#92AAF6")
    ("#B300FF" . "#DF92F6")
    ("#3DD8FF" . "#5AF2CE")
    ("#FFFFFF" . "#FFFFFF")])
 '(custom-enabled-themes (quote (sanityinc-tomorrow-eighties)))
 '(custom-safe-themes
   (quote
    ("628278136f88aa1a151bb2d6c8a86bf2b7631fbea5f0f76cba2a0079cd910f7d" "82d2cac368ccdec2fcc7573f24c3f79654b78bf133096f9b40c20d97ec1d8016" "06f0b439b62164c6f8f84fdda32b62fb50b6d00e8b01c2208e55543a6337433a" default))))
(require 'org)
(require 'htmlize)
;; to have things work correctly in batch-mode
(require 'font-lock)
(require 'cc-mode)
(require 'ox-org)
(c-after-font-lock-init)(setq org-html-validation-link nil)
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
