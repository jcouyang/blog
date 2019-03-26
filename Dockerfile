FROM alpine:latest
RUN apk add emacs
VOLUME emacsd:/root/.emacs.d
WORKDIR /orgpress
CMD emacs -batch -l orgpress.el -f org-publish-all