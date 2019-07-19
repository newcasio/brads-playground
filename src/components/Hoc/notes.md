# Higher Order Components (HOC)


Share common functionality between components.

HOC - pattern where a function takes a component as an argument, and returns a new component.
`ie const NewComponent = higherOrderComponent(OriginalComponent);`

Adds functionality or data to original component.

 ` const IronMan = withSuit(TonyStark)`

 Create a HOC function, setup for the original component to be passed into it.

 Within HOC funtion, create a new class component, and export it. (see `withCounter.js`)

 Import this newly returned component into the component file which you want to enhance.

 Passing the original component into the function at the export default line, eg `export default UpdatedComponent(originalComponent)`.  This exports the enhanced component.

 The new functionalilty is now available within the orginal component via "this.props.`attribute`".
 

Pass paraments to the HOC where you pass WrappedComponent.  Then when you pass original compoment to the HOC in the export default line, just add the argument.

Both original component and new component resulting from HOC can have own states.  State in original component is `this.state`, whereas state in the new component has to be passed back to the original component as props and will be accessed by `this.props`.


 ## Naming conventions of HOC

 function name indicates added functionality, in this case `withCounter` = `UpdatedComponent`.

 `OriginalComponent` is usally called `WrappedComponent` because it is being passed into the function.

 The NewComponent is usually name the same as the function, but with a captial (being a component), `WithCounter`.



 ## Note on props

 If you pass props to the original component from the parent component, they are passed to the HOC, not the original component.  
 eg. `<ClickCounter name="Brad">`.  
 In the ClickCount component, this.props.name does not work.

In the HOC, the props is accessed like normal as part of `this.props`, just add as a prop to the returning WrappedComponent to be accessed in the originally targetted component. 

Use the spread operator to pass all props originally passed by the origal component to the enhanced component (easier than listing each prop to pass down).