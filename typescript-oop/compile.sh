tslint -c ./tslint.json './*.ts'
tsc './*.ts' --watch
node ./release/index.js