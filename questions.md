1. What is the difference between Component and PureComponent? give an example where it might break my app.\
*Answer: PureComponent is a component with a 'smart' shouldComponentUpdate method. React handle it automatically by not deep comparison of state and props. PureComponent can break our app in case we need to compare complex nested values in state or props, in some cases it may not rerender, or wrapping regular Components in PureComponent can lead to the same situation with rerender.*
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?\
*Answer: The main bottleneck here is that by using ShouldComponentUpdate we can block rendering if needed. But at the same time, all consumers of context will be rerendered if any provider property changed. That means that some components may be rerendered unexpectedly.*
3. Describe 3 ways to pass information from a component to its PARENT.\
*Answer: - 1 create callback in the parent and pass it to children, then pass data to the parent; - 2 push the data through ref; - 3 pass the data through state manager (context for example)*
4. Give 2 ways to prevent components from re-rendering.\
*Answer: - 1 memoise dangerous places; - 2 compare new props with previous and block render update*
5. What is a fragment and why do we need it? Give an example where it might break my app.\
*Answer: render part of component should be wrapped in one object, that mean that `render(<div /><div />) or return (<div /><div />)` will throw error, that's why we need to wrap our code in `<Fragment>...</Fragment>, <>...</>` or any other wrapper*
6. Give 3 examples of the HOC pattern.\
*Answer: - 1 external middleware for props to handle them somehow; 2 state management; 3 code reusing. As an a most popular example we can create `ErrorBoundarry` component with a HOC `withErrorBoudarry` and use it like `export default withErrorBoudarry(MyAwesomeFetchComponent)` so componentDidCatch will handle all errors.*
7. what's the difference in handling exceptions in promises, callbacks and async...await.\
*Answer: in Promise we handle it by reject attribute `new Promise((resolve, reject) => ...`; in callbacks by using `then().catch()` construction, in async by using `try catch` *
8. How many arguments does setState take and why is it async.\
*Answer: Two: we can pass value or calback with current state and props. Generally speaking setState is async function because before rerender React checks all state updates and only after that goes the view part.*
9. List the steps needed to migrate a Class to Function Component.\
*Answer: 1 Remove class declaration; 2 Pass all constructor properties to functional component; 3 convert all lifecycle to hooks (useEffect, setState, useCallback etc.); 4 remove all 'this', 5 remove `render()` method and just leave `return`*
10. List a few ways styles can be used with components.\
*Answer: - 1 inline styles (style={{color: red}}); - 2 import css file + regular className attribute; - 3 cssModules (most commonly used with React); - 4 styledComponents*
11. How to render an HTML string coming from the server.\
*Answer: by usind `dangerouslySetInnerHTML={{__html: '<p>this is html to render</p>` property.'}}*