# Routing

https://github.com/reach/router

*When deploying this to a server ensure that all routes are forwarded to the index.html page.*

*If your url does not start at the base of the domain then you need to set the basename on the BrowserRouter component as a prop.*

``` bash
npm install react-router react-router-dom
# You technically only need react-router-dom for the web
```

*react-router-dom is the package that you need for the web.react-router contains the logic for routing.*

At the level that you would like to enable routing. This can happen in the index.js or App.js file.

``` jsx
import { BrowserRouter } from 'react-router-dom';
...
render() {
    return (
        <BrowserRouter>
            ... //components
        </BrowserRouter>
    )
}
```

Then you can route in individual components

``` jsx
import {Route} from 'react-router-dom';
...
// you can optionally use exact to match the exact route
render() {
    return (
        ...
        // Different methods of rendering 
        <Route path="/" render={() => <h1>Home</h1>} />
        <Route path="/posts" component={Posts} />
        ...
    );
}
```

Use router links to prevent reloading behavior

``` jsx
import { Route, Link} from 'react-router-dom';
//...
render() {
    return (
        <Link to="/">Home</Link>
        <Link to={{ 
            pathname: '/new-post',
            hash: '#submit',
            search: '?quick-submit=true'
        }}>New Post</Link>

    )
}
```

React router will supply props to the page that has been navigated to.


Class based components
``` jsx
...
componentDidMount() {
    this.props.match // isExact, params, path, url
    this.props.location // hash (id of the element you want to scroll to), pathname, search
    this.props.history // length
}
...
```

Functional components
``` jsx
...
import { withRouter} from 'react-router-dom'

...

export default withRouter(Post)
...
```

NavLink for additional highlight properties etc

``` jsx
import {Route, NavLink} from 'react-router-dom'

render() {
    return (
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/posts" activeClassName="active-class" exact>Posts</NavLink>
        <NavLink to="/new-posts" activeStyle={{color: '#f0f0f0' }} exact>Posts</NavLink>
    )
}
```

To take advantage of parameters use the `:paramName` in the route.

``` jsx
...
render() {
    return (
        <Link to="/posts/:id" exact>Post 1</Link>

    )
}
...

...
componentDidMount() {
    const postId = this.props.match.params.id;
    // take advantage of the post id
}
...
```

*Use URLSearchParams to parse query string parameters.*
*Use the switch component to render a single route*

Programmatic navigation:

``` jsx
componentDidMount() {
    this.props.history.push({pathname: '/' });
}
```

Nested Routes

``` jsx
render() {
    return (
        <div>
            <Route path={`${this.props.match.url}/:id`} exact component={NewPost} />
        </div>
    )
}
```

Redirect

``` jsx
// outside of switch statement
<Redirect to="/posts"/>

// inside of a switch statement
<Switch>
    <Redirect from="/" to="/posts"/>
</Switch>

// conditionally
let redirect = null;

if(this.state.submitted) {
    redirect = <Redirect to="/posts"/>
}

return (
    <div>{redirect}</div>
)

// programmatically
this.props.history.replace("/posts"); // push works it just adds the new url to the stack

```

404 case

``` jsx
<Switch>
    <Route path="/posts" component={Posts} />
    <Route component={NotFound} />
</Switch>
```

Lazy Loading Routes

Manual

``` jsx
import React, {Component} from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then( cmp => {
                    this.setState({ component: cmp.default})
                });
        }

        render () {
            const LazyComponent = this.state.component;
            return LazyComponent ? <LazyComponent {...this.props} /> : null 
        }
    }
}
export default asyncComponent;
...

import asyncComponent from '../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

<Switch>
    <Route path="/posts" component={Posts} />
    <Route path="/new-post" component={AsyncNewPost} />
    <Route component={NotFound} />
</Switch>
```

React Suspense

*Does not work with server-side rendering*

``` jsx
import React, {Suspense} from "react";
...
const NewPost = React.lazy(() => import("./NewPost/NewPost"))l

...
<Switch>
    <Route path="/posts" component={Posts} />
    <Route path="/new-post" render={() => (
        <Suspense fallback={<div>Loading</div>}>
            <NewPost />
        <Suspense>
    )} />
    <Route component={NotFound} />
</Switch>
```