# NomadCoder-CustomHooks

Repository to practice making React Custom Hooks based on the lecture from NomadCoder

Lecture Links

- https://nomadcoders.co/react-hooks-introduction/lectures/1589
- https://www.youtube.com/watch?v=yS-BU6eYUDE
- https://www.youtube.com/watch?v=sZDvByH2mNU

All lectures are in English.

## Purpose / Goal

- To recap about commonly used React Hooks.
- To understand the details and theory behinds React Hooks.
- To learn how to create Custom Hooks.

## What I Learn

- Custom hooks are basically same as helper methods to conduct repeating tasks more conveniently.
- [Window:beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) fired when the window are **about to be unloaded**.

## Project

- Several Custom Hooks are implemented
  - `useInput()`: Handle user's input on HTML input box
    - Automatically update the input when user changes the text in the input box.
    - If validator function passed to the Hook, it will check the value before update the value.
  - `useTabs()`: Showing the content of currently selected tab
    - Pretend that the information has already been retrieved from the API.
  - `useTitle()`: Update title of the page
    - Works when component mounts and updates
  - `useClick()`: Execute a function when an element clicked
  - `useConfirm()`: Ask user before do certain action
  - `usePreventLeave()`: Ask user if s/he really want to exit the window
  - `useBeforeLeave()`: Execute a function when user leaves the tab
  - `useFadeIn()`: Make elements fade in.
  - `useNetwork()`: Detect network status and execute a function when network status changes
