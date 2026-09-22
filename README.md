# Dev Stack

Dev Stack is a website where users can see different technologies and create their own development stack.

## Technologies I Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Vite

## Features

1. Users can see different technologies.
2. Users can add technologies to their own stack.
3. Users can remove technologies from their stack and see the selected count.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is used to write HTML-like code inside JavaScript or TypeScript. It makes React code easy to write and understand.

### 2. What is the difference between props and state?

Props are used to send data from parent to child. State is used to store data that can change in a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and change data in React.

I used it for technology data and selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after the component loads.

I used it to load the technology data from the `data.json` file.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in the list. It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show the empty stack message.

```tsx
{selectedTechnologies.length === 0 && (
  <p>Your stack is empty.</p>
)}