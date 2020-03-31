# Redux

https://github.com/markerikson/redux-ecosystem-links

## Types of State

Simple applications don't need redux, but medium to large applications can use redux.

Local UI state generally should not be in redux.

Persistent state like users and posts should be loaded into the redux store.

Client state like authentication and filters set should be managed via redux.

## Where to Put Data Transformation Logic 

Action Creators vs Reducers

Reducers are meant to update state, but the action creators should not update the state too much.

Both work it's really up to you where you want to transform your data.

## Folder Structure

You can add the store under the container components