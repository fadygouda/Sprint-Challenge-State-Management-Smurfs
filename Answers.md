1. What problem does the context API help solve?

Context API solves the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are information that's passed from the application to the store of the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and is muttable. Component state is local, only partains to the component its being used in and can only be updated through that component and passed through props. Component state is immutable
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows the application to handle asynchronous call in our actions. It allows us to call cations that rerun functions instead of using dispatch in our action objects

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Weirdly enough, i really enjoyed redux, content API is second on the list.s
