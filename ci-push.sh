eval $(ssh-agent)
chmod 600 deploy
ssh-add ./deploy
cd public
git add .
git commit -m "auto publi:ship:"
git push origin gh-pages