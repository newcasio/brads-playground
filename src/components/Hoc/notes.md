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
 