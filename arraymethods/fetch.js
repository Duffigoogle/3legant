// then, catch And finally #
// then and catch and finally are methods of the Promise object, and they are chained one after the other. Each takes a callback function as its argument and returns a Promise.


const greeting = new Promise((resolve, reject) => {
  resolve("Hello!");
});


// Using then, catch and finally, we could perform a series of actions based on whether the Promise is resolved (then) or rejected (catch) — while finally allows us to execute code once the Promise is settled, regardless of whether it was resolved or rejected:

greeting
  .then((value) => {
    console.log("The Promise is resolved!", value);
  })
  .catch((error) => {
    console.error("The Promise is rejected!", error);
  })
  .finally(() => {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected."
    );
  });

//  we only need to use then. Chaining multiple then methods allows us to perform successive operations on a resolved Promise. For example, a typical pattern for fetching data with then might look something like this:

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    return {
      data: data,
      status: response.status,
    };
  })
  .then((res) => {
    console.log(res.data, res.status);
  });


//
// async And await #
//

// By contrast, async and await are keywords which make synchronous-looking code asynchronous. We use async when defining a function to signify that it returns a Promise. Notice how the placement of the async keyword depends on whether we’re using regular functions or arrow functions:

async function doSomethingAsynchronous() {
  // logic
}

const doSomethingAsynchronous = async () => {
  // logic
};

// await, meanwhile, is used before a Promise. It pauses the execution of an asynchronous function until the Promise is resolved. For example, to await our greeting above, we could write:

async function doSomethingAsynchronous() {
  const value = await greeting;
};



// We can then use our value variable as if it were part of normal synchronous code.

// As for error handling, we can wrap any asynchronous code inside a try...catch...finally statement, like so:

// async function doSomethingAsynchronous() {
//   try {
//     const value = await greeting;
//     console.log("The Promise is resolved!", value);
//   } catch((error) {
//     console.error("The Promise is rejected!", error);
//   } finally {
//     console.log(
//       "The Promise is settled, meaning it has been resolved or rejected."
//     );
//   }
// }


// Finally, when returning a Promise inside an async function, you don’t need to use await. So the following is acceptable syntax.

async function getGreeting() {
  return greeting;
};


// However, there’s one exception to this rule: you do need to write return await if you’re looking to handle the Promise being rejected in a try...catch block.

async function getGreeting() {
  try {
    return await greeting;
  } catch (e) {
    console.error(e);
  }
}