# Component Lifecycle

*Only available in class-based components*

- constructor - recieves props, setup state don't cause side effects
- getDerivedStateFromProps - When props change update internal state. Rarely used. No side effects
- getSnapshotBeforeUpdate - Last-minute DOM ops
- componentDidCatch
- componentWillUnmount
- shouldComponentUpdate - Cancel the updating the process, for performance reason, careful
- componentDidUpdate - render is complete and you can cause side effects
- componentDidMount - Cause side-effects, don't update the state
- render - Prepare & Structure JSX. No side effects


Useful Resources:

More on useEffect(): https://reactjs.org/docs/hooks-effect.html

State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

Higher Order Components: https://reactjs.org/docs/higher-order-components.html

Refs: https://reactjs.org/docs/refs-and-the-dom.html