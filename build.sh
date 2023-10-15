#!/bin/bash
set -e

# cleanup
rm -rf ./.tmp
rm -rf ./src
mkdir ./src
cp .openapi-generator-ignore ./src/.openapi-generator-ignore

# clone auth
mkdir ./.tmp
cd .tmp
git clone --branch issues-10 git@github.com:yaiam/power.git
cd ..

# install tools
dotnet tool restore

# publish
dotnet publish ./.tmp/power/src/Api/Api.csproj -o ./.tmp/power/publish/ -c Release

# generate swagger.json
dotnet swagger tofile --output swagger.json ./.tmp/power/publish/Api.dll public

# cleanup
rm -rf ./.tmp

# generate client
npm i
npm run build