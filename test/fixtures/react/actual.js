class Component
extends React.Component {
  state = {
    prop: 'Hello',
  };

  constructor(props) {
    super(props);

    this.prop1 = 'prop1';
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {}

  method1() {}
}
