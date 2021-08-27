build:
	yarn build
#	yarn deploy-storybook
	yarn publish --access public
	git add .
	git commit -m "$(m)"
	git push