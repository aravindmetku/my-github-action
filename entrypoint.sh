#!/bin/bash

set -e

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

    wget https://github.com/aravindmetku/my-github-action/blob/main/g-init.gradle
fi

if [[ -f "build.gradle" ]]; then
    echo "Gradle repository detected. Attempting to generate dependency file"
    gradle --version
fi

node index.js
