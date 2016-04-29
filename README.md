# Angular 1 + Webpack + Redux

This is an attempt to gracefully use Angular 1, Webpack, and Redux together.
The app is the same Todo list which Dan Abramov builds during his
[Getting Started with Redux series](https://egghead.io/series/getting-started-with-redux).

### Why?

* I am not completely comfortable with the bindings [ng-redux](https://github.com/angular-redux/ng-redux)
  is offering as they seems to make the simple Redux much more complex
* I want to be able to register reducers from module, not link all of them
  from the root reducer
* I would like to keep the boilerplate code at minimum

### What works

* Registering reducers from module via ReducerRegistry as recommended in [Code Splitting Redux Reducers Example](https://github.com/insin/react-examples/tree/master/code-splitting-redux-reducers)).
* Actions and reducers for adding todo, toggling todo, and setting visiblity filter

### What I want to try

* Manage angular-ui-router state in the Redux (probably try [redux-ui-router](https://github.com/neilff/redux-ui-router)?)
* Nicer and simpler defining of reducers and actions inside a module (the .redux.js
  files right now does not feel clear enough)

## Run

Simply just install dependencies

```
npm install
```

and run the `webpack-dev-server` via the npm script  

```
npm run dev
```

## License

MIT
