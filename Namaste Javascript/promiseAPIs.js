console.log("=== Promise.all Example ===");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 rejected');
  }, 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log("=== Promise.allSettled Example ===");
  console.log('All promises resolved:', values);
}).catch((error) => {
  console.log("=== Promise.allSettled Example ===");
  console.error('One of the promises rejected:', error);
});

Promise.allSettled([p1, p2, p3]).then((values) => {
  console.log("=== Promise.allSettled Example ===");
  console.log('All promises resolved:', values);
}).catch((error) => {
  console.log("=== Promise.allSettled Example ===");
  console.error('One of the promises rejected:', error);
});


Promise.race([p1, p2, p3]).then((value) => {
  console.log("=== Promise.race Example ===");
  console.log('First promise resolved:', value);
}).catch((error) => {
  console.log("=== Promise.race Example ===");
  console.error('First promise rejected:', error);
});


Promise.any([p1, p2, p3]).then((value) => {
  console.log("=== Promise.any Example ===");
  console.log('First promise resolved:', value);
}).catch((error) => {
  console.log("=== Promise.any Example ===");
  console.error('All promises were rejected:', error);
});