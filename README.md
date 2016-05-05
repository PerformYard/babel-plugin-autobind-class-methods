# babel-plugin-autobind-class-methods
Autobinds "this" to class methods, works with hot reloading, created to be used with React

Requires React Hot Loader 3

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