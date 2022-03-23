/**
 * @function throttle
 * @param {number} wait
 * @param {function} callback
 *
 * ========
 * What is throttled ?
 * Throttling is a technique in which, no matter how many times 
   user fires the event, the attached function will be executed 
   only once in a given time
 * ========
 */

function throttle(fn, wait) {
  let throttled;

  return function () {
    if (!throttled) {
      fn.apply(this, arguments);
      throttled = true;

      setTimeout(() => {
        throttled = false;
      }, wait);
    }
  };
}

const logData = (message) => {
  console.log(message);
};

const log = throttle(logData, 1000);
log("Please update your password ASAP");
log("User created successfully");
log("Your email verification failed, please try again");
log("Password has been updated successfully");
