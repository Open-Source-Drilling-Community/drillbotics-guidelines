serve:
	# Local preview without mutating gh-pages
	mkdocs serve

build:
	mkdocs build --clean

version-2024:
	mike deploy 2024 && mike alias 2024 latest && mike set-default latest

release:
	git add . && git commit -m "docs: update" || true
	git push