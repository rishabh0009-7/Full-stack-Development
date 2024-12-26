
//virtual dom 
so what raect actually do is it mimic the dom and create its own virtual dom and ehne in original dom some changes happen it also replicate the same

//react reconcillation
the algorithm react uses to diff one tree with another to determine which parts neede dto be changed
In simple terms, React Reconciliation is the process React uses to figure out what changed in the user interface (UI) and then updates only the parts that need to be changed, instead of re-rendering the entire UI.

//react fiber
React Fiber is the reimplementation of React’s core algorithm, introduced in React 16, to make React faster, smoother, and better at handling large, complex user interfaces.

Why was Fiber introduced?
Before React Fiber, React used a process called "stack reconciliation" to update the UI. However, it had some limitations:

It couldn't handle large updates smoothly.
It treated all updates as equally important, which could cause slow or unresponsive apps.
