const IGNORED_METHODS = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount',
  'render',
];
const buildBoundMethod = (types, methodName) =>
  types.classProperty(
    types.identifier(methodName),
    types.callExpression(
      types.memberExpression(
        types.memberExpression(
          types.thisExpression(),
          types.identifier(methodName),
          false
        ),
        types.identifier('bind'),
        false
      ),
      [
        types.thisExpression(),
      ]
    )
  );

export default ({ types }) => ({
  visitor: {
    ClassExpression(path, state) {
      const classBody = path.get('body');

      classBody.get('body')
        .filter((node) => (
          node.isClassMethod({ kind: 'method' })
          && IGNORED_METHODS.indexOf(node.node.key.name) == -1
        ))
        .forEach((node) => {
          classBody.pushContainer('body', buildBoundMethod(types, node.node.key.name))
        });
    },
  },
});
