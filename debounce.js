/**
 * @function debounce
 * @param {number} wait
 * @param {function} callback
 *
 * ========
 * What is debounced ?
 * Debouncing is a technique in which no matter how many times 
   user fires the event, the attached function will be executed 
   only after the specified time, once the use stop the firing event
 * ========
 */

function debounce(fn, wait) {
  let timer;

  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

const logData = (message) => {
  console.log(message);
};

const log = debounce(logData, 2000);
log("Please update your password ASAP");
log("User created successfully");
log("Your email verification failed, please try again");
log("Password has been updated successfully");
