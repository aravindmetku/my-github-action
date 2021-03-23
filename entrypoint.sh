#!/bin/bash

set -e

echo $1

if [[ $1 -eq "TEMP" ]]; then
  echo "got right input from user"
fi

if [[ -f "pom.xml" ]]; then
    echo "Maven repository detected. Attempting to generate dependency file"
    mvn --version
fi

if [[ -f "package.json" ]]; then
    echo "Node repository detected. Attempting to generate dependency file"
    npm --version
    node --version
    mvn --version
    gradle --version
fi

if [[ -f "build.gradle" ]]; then
    echo "Gradle repository detected. Attempting to generate dependency file"
    gradle --version

    wget https://github.com/aravindmetku/my-github-action/blob/main/g-init.gradle
fi

node index.js
