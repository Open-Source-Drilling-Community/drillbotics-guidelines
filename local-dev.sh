#!/usr/bin/env bash
set -euo pipefail

python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

echo "Starting MkDocs dev server (does not touch gh-pages)..."
mkdocs serve

echo
echo "Tip: if you need the mike version switcher, run 'mike serve --dev-addr 127.0.0.1:8000' after fetching gh-pages."
