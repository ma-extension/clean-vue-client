build-extension:
	cd src/ && vue build
	cp manifest.json src/dist/manifest.json
	cp src/historyReaders.js src/dist/historyReaders.js
	mv src/dist/index.html src/dist/popup.html
