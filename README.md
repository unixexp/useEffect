This example demonstrate how hooks useState and useEffect work.

There are array with car models and few state variables: `carId`, `car` and `loading`.
State of `carId` variable initialized with `0` value, witch point to first car in car array.
`car` variable contain car name and initialized with `null` value. `loading` state
variable used to display car loading process (setted to `false`)

useEffect function using to register hook function with Promise object to load car by id
and change `car` and `loading` state variables.

*** Start application ***

When application started, React initialize variables, register load function by `useEffect` hook
and render component <App>.

After render will be ended, React call registered by `useEffect` function and that start to load car.
In this case `useEffect` function is working like a `ComponentDidMount` hook for class components.

It set `loading` state variable as `true` and registered asynchronous load function with promise
object with emulated network delay (`loadDelay` var).

After that React render component again.
It happened because `loading` state variable was changed and it is different from
prev (initialize) state.

When car loaded, promise resolving and change `loading` and `car` state variables.
React render component.

*** User clicked button 'change' ***

When user click to `change` button, handler generate random `carId` from array
and set `carId` state variable. React discovered state changing render component.

In our example we passing [carId] as second argument to `useEffect` function.
It means that hook `useEffect` will be called after render process but only if `carId` was changed.
So hook will be called.
In this case `useEffect` function is working like a `ComponentDidUpdate` hook.

Next step it is the same as after component initialize.
Setting state `loadin`, load cars, render...