# Short Response Questions

## Question 1: Promise States

What are the three states of a Promise? For each state, explain what it represents and which Promise method (`.then()` or `.catch()`) is used to handle it.

**Your Answer:**

The three stages are pending, resolved, and rejected.

- Pending is when the work is being done, the promise is in the process of getting fulfilled.

- Resolved is when the promise is fulfilled without any (major) problems or the process was successful!

- Rejected happens when the promise is fulfilled but something bad happened.


## Question 2: Callback Hell vs. Promise Chaining

Explain why deeply nested callbacks (callback hell) are problematic, and describe how Promise chaining with `.then()` solves this problem.

**Your Answer:**

Callback hell is problematic because its repetitive and messy needlessly and gets confusing especially when errors arise. Chaining with `.then` allows us to move forward with our promises and have an ultimate error catcher at the bottom that handles any errors if they arise.

## Question 3: Error Handling with `.catch()`

If you have a chain of three `.then()` calls followed by a single `.catch()`, and the second `.then()` throws an error, what happens? Why is this behavior useful?



**Your Answer:**

Here's the catch, you don't need a catch for every then, therefore the second then gets caught by the catch.
