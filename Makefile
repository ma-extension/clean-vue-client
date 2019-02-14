build-extension:
	cd src/ && vue build
	cp manifest.json src/dist/manifest.json
	mv src/dist/index.html src/dist/popup.html
