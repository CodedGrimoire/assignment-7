1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension in React that allows you to write HTML-like elements directly in JavaScript. It makes UI code easier to write and understand, and under the hood, JSX is compiled into regular JavaScript function calls (React.createElement). It helps developers visualize the component structure more clearly.

2. What is the difference between State and Props?
State represents data that belongs to a specific component and can change over time, usually in response to user actions or events. Props (short for properties) are external inputs passed from a parent component to a child and are immutable inside the child. In short, state is private and controlled by the component, while props make components reusable and configurable.

3. What is the useState hook, and how does it work?
The useState hook lets functional components store and manage state. It returns an array with two values: the current state and a setter function to update the state. When the setter is called, React re-renders the component to reflect the new state, making the UI dynamic.

4. How can you share state between components in React?
State can be shared by “lifting it up” to a common parent component and then passing it down as props to children. For more complex cases, you can use the Context API or external state management libraries (like Redux or Zustand) to provide global state that multiple components can access without prop drilling.

5. How is event handling done in React?
Event handling in React uses JSX attributes like onClick, onChange, or onSubmit with camelCase naming. Instead of strings, you pass functions that act as event handlers, usually written as arrow functions or references. React wraps these events in a synthetic event system, which ensures consistent behavior across different browsers.