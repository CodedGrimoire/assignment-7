1. What is JSX, and why is it used?


Ans: JSX,a syntax extension of  react allows us to write HTML-like elements directly in Js file instead of using  a separate .html file.Then it is compiled into regular javascript function calls.This method is easier and  much more comprehensible.

2. What is the difference between State and Props?

Ans:State represents any data that is not fixed and may or may not change over time.This change usually happens in response to user action or events.On the other Hand,props(properties) are inputs passed from parent to a child components and then they are immutable inside the child component. So,state is private and controllable within components,meanwhile props make components reusable.

3. What is the useState hook, and how does it work?


Ans: The useState hook is used to let functional components store and manage state.It returns an array with two values: the current state and a setter function to update the state. React can re-render a component to make a new state when the setter function is called.

4. How can you share state between components in React?

Ans:In react we can share state between components by lifting it up to a common parent and then distributing  it to child components using props.To extend the accessability and to reduce the use of props we can use context API,then multiple components can consume the same state directly from a shared context  provider.

5. How is event handling done in React?


Ans:Event handling is done in react by using Jsx attributes like onClick, onChange, or onSubmit with camelCase naming.But in here instead of passing strings we pass functions that act as event handlers which are usually written as arrow functions or references.Then react wraps
these events.