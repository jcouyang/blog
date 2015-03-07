(require 'color-theme)
(color-theme-initialize)
(color-theme-standard)
(require 'clojure-mode)
(clojure-font-lock-setup)
(require 'org)
(require 'htmlize)
(setq debug-on-error t)
(setq blog-path (expand-file-name "org"))
(setq org-html-validation-link nil)
(setq org-confirm-babel-evaluate nil)
(custom-set-variables
  '(org-publish-timestamp-directory
     (convert-standard-filename "public/.org-timestamps/")))
(setq postamble (with-temp-buffer
                  (insert-file-contents "html/postamble.html")
                  (buffer-string)))
(defun set-org-publish-project-alist ()
  "Set publishing projects for Orgweb and Worg."
  (interactive)
  (setq org-publish-project-alist
    `(("blog-notes"
       ;; Directory for source files in org format
        :base-directory ,blog-path
        :base-extension "org"
        :html-doctype "html5"
        :html-head "<meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"/style/pixyll.css\" />"
        :html-html5-fancy t
        :html-postamble ,postamble
        ;; HTML directory
        :publishing-directory "public"
        :publishing-function org-html-publish-to-html
        :recursive t
        :headline-levels 3
        :section-numbers nil
        :with-toc t
        :with-tags t
        :with-tasks t
        :with-sub-superscript t
        :with-timestamps t
        :with-author t
        :with-date t
        :html-link-up "/index.html"
        :html-link-home "/jichao.ouyang.html"
        :auto-preamble t
        :html-postamble-format "%a %d" ;write author and date at end
        :auto-sitemap t
        :sitemap-title "Jichao Ouyang's Blog"
        :sitemap-filename "index.org"
        :sitemap-style list
        :sitemap-sort-files "anti-chronologically"
        :sitemap-sort-folders "mix"
        :sitemap-file-entry-format "*%t* =%d=" ;write title and date in sitemap
        :sitemap-ignore-case t
        :makeindex t
        :html-head-include-default-style nil
        )

       ;; where static files (images, pdfs) are stored
       ("blog-static"
         :base-directory ,blog-path
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|woff2\\|woff"
         :publishing-directory "public"
         :recursive t
         :publishing-function org-publish-attachment
         )
       ("blog" :components ("blog-notes" "blog-static"))
       )))
(set-org-publish-project-alist)
