/**
 * @function sleep
 * @param {number} delay
 */

function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// Test sleep function
async function main() {
  console.log("Log message immediately");
  await sleep(5000);
  console.log("Message after Wait 5000ms");
}

main();
