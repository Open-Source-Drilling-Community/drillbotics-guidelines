serve:
	# Bootstrap a local "dev" version and serve via mike
	mike deploy --update-aliases dev latest
	mike serve

build:
	mkdocs build --clean

version-2024:
	mike deploy 2024 && mike alias 2024 latest && mike set-default latest

release:
	git add . && git commit -m "docs: update" || true
	git push
