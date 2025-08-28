#!/usr/bin/env bash
set -euo pipefail

python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

echo "Bootstrapping a local 'dev' version (aliased to 'latest') for mike..."
mike deploy --update-aliases dev latest

echo
echo "Now serving with mike so versions.json is available:"
echo "  mike serve"
echo
echo "Tip: you can also run 'make serve' (does the same)."
