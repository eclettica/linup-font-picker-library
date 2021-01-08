#git subtree push --prefix dist/linup-font-picker https://github.com/eclettica/linup-font-picker.git angularv9

sourcedir=/data/eclettica/work/LINUP/librerie/linup-font-picker-library/dist/linup-font-picker
targetdir=/data/eclettica/work/LINUP/librerie/githubRepo/linup-font-picker
branch=angularv7

echo "move to $targetdir"
cd $targetdir
echo "checkout $branch"
git checkout $branch
echo "pull $branch"
git pull origin $branch
echo "removing files"
rm -Rf ./*
echo "copy new files from $sourcedir"
cp -Rf $sourcedir/* .
echo "add all..."
git add .
now=$(date +"%Y%m%d%H%M%S")
echo "commit -m push $now"
git commit -m "push $now"
echo "push on $branch"
git push origin $branch
