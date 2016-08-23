# babel-plugin-autobind-class-methods v2.0.0
Autobinds "this" to class methods and works with hot reloading.

Compatible with the latest React Hot Loader 3-beta

Install:
```
   npm install babel-plugin-autobind-class-methods --save-dev 
```

Example .babelrc:
```
{
  "presets": ["es2015", "react"],
  "plugins": ["autobind-class-methods", "react-hot-loader/babel"]
}
```