# React Lifecyle Methods

Class-based components only (not funcitonal)

---

## componentWillMount

Called immediately before initial rendering.

---
## componentDidMount

Call immediately after intial rendering

---
## componentWillReceiveProps

Called whenever component receives new props  (eg. state changes in higher component, sent as props to this component).  

This receives props when called ie. `componentWillReceiveProps(newProps)`.

---
## shouldComponentUpdate

Called before rendering, after receiving new props or state.

Receives props and state, ie `shouldComponentUpdate(nextProps,nextState)` AND must `return true` so componentWillUpdate can run if needed.

Can `return false` to prevent rendering.  If you have logic within this method checking something, and decide a re-render is not necessary.

---
## componentWillUpdate

Similar to shouldComponentUpdate.  Runs as long as shouldComponentUpdate does NOT return false.

Receives props and state, ie `componentWillUpdate(nextProps,nextState)` 

---
## componentDidUpdate

Run after components have re-rendered/actual DOM has been updated.

Receives previous props and state because called after render, ie `componentWillUpdate(prevProps,prevState)`. 

---
## componentWillUnmount

Immediately before removing a component from the DOM.