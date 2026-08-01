#!/bin/bash
# Exit code 1 = Continue build | Exit code 0 = Skip build
if [[ "$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  exit 1
else
  exit 0
fi
