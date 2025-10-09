#!/usr/bin/env bash
set -euo pipefail
IFS=$nt
OWNER="shardie-github"
REPO="suite-monorepo"
BASE="${BASE:-$HOME/repos}"
DEST="$BASE/$REPO"
ART="./artifacts"
mkdir -p "$BASE" "$ART"
say(){ printf "%b\n" "$*"; }
if [ ! -d "$DEST/.git" ]; then
  say "⤵️  Cloning $OWNER/$REPO …"
  git -C "$BASE" clone "https://github.com/$OWNER/$REPO.git" "$REPO"
else
  say "🔄 Updating $OWNER/$REPO …"
  (cd "$DEST" && git fetch --all --prune && git reset --hard origin/main || true)
fi
say "🗂  Writing file tree…"
(cd "$DEST" && git ls-files | sort) > "$ART/${REPO}-files.txt"
say "🧭 Recent commits…"
(cd "$DEST" && git log --graph --decorate --oneline -n 200) > "$ART/${REPO}-commits.txt"
say "📦 README excerpt (if present)…"
if [ -f "$DEST/README.md" ]; then
  head -n 200 "$DEST/README.md" > "$ART/${REPO}-README.head.txt"
fi
say "✅ Repo context written to: $ART"
