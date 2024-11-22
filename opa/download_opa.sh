#!/bin/bash

# Define OPA download URL and file name
OPA_URL="https://openpolicyagent.org/downloads/latest/opa_windows_amd64.exe"
OPA_BINARY="opa.exe"
OPA_PATH="/c/Program Files/OPA"

# Download OPA binary (ignore SSL certificate check on Windows)
echo "Downloading OPA binary from $OPA_URL..."
curl -L --insecure -o $OPA_BINARY $OPA_URL

# Create the OPA directory if it doesn't exist
echo "Checking if OPA directory exists..."
if [ ! -d "$OPA_PATH" ]; then
    echo "Creating OPA directory at $OPA_PATH..."
    mkdir -p "$OPA_PATH"
fi

# Move OPA to the directory in PATH
echo "Moving OPA binary to $OPA_PATH..."
mv $OPA_BINARY "$OPA_PATH/"

# Verify the installation
echo "Verifying OPA installation..."
"$OPA_PATH/opa.exe" version
