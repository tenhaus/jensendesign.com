rm -rf dist images *.ico index.html bower_components scripts styles robots.txt
cp -r ~/Desktop/dist/* .
git add -A
git commit -a -m "Updated Build"
