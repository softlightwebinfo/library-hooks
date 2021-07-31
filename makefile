build:
	yarn cli
	yarn build
	yarn deploy-storybook
	yarn publish --registry http://musicosdelmundo.com:4873
	git add .
	git commit -m "$(m)"
	git push