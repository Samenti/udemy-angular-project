for this state of the project to work, you need a workaround:

1. Install manually `npm i -D @nguniversal/express-engine`
2. Go to `node_modules/@nguniversal/express-engine/package.json`
3. Add line `"./schematics/utils": "./schematics/utils/index.js"` to `"exports'`
4. Go to `node_modules\@nestjs\ng-universal\node_modules\@nguniversal\express-engine\package.json`
5. Add the same line `"./schematics/utils": "./schematics/utils/index.js"` to `"exports'`
6. Run `ng add @nestjs/ng-universal`
