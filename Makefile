pages:
	npm run build
	rm -rf docs
	mkdir docs
	cp index.html docs/index.html
	mkdir docs/dist/
	cp dist/*.js docs/dist/
	cp -r public docs/public
