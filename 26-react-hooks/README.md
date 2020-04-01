# React Hooks

## Rules

- Use inside of react component function
- Must be root level, not inside of other functions

- useState - manage component state, returns an array with two elements to retrieve and update the state
- useReducer - Good for managing complex state changes, it resembles redux reducers.
- useContext - Allows you to retrieve a context and take advantage of it within the component and not just the render function.
- useEffect - Manage side effects like http requests, runs after the render cycles and for every render cycle. The second argument of the function can be for specific dependencies of when you want the useEffect to act again. Use empty array to execute only once. Dependencies can be props or state. If you return a function from useEffect you can perform clean up steps. the function runs before the next effect will execute.
- useCallbacks - allows you to wrap a function to be cached and will not recreate the function. You need to supply dependencies, excluding state. Great for if you need to pass your function down as a prop and you don't want the latter component to re-render as a result.
- useMemo - used to save a value that doesn't change, can be used to decided when to re-render a component. Alternative to React.memo, this is great for values in general React.memo works in general.
