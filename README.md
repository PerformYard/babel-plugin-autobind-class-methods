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

TODO:
  - ignore binding for React components:
```
[
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
    'render',
]
```
  - find out how babel tests plugins
  - rewrite to ES6 and add a transpiler