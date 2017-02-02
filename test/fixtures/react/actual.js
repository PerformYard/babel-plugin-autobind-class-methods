class Component
extends React.Component {
  state = {
    prop: 'Hello',
  };

  constructor(props) {
    super(props);

    this.classProp1 = 'classProp1';
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {}

  classMethod1() {}
}
