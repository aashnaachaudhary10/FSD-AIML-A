function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve(true);
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetching data...");
      resolve([10, 20, 30]);
    }, 1000);
  });
}

function calculateData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Calculating data");
      let sum = data.reduce((a, b) => a + b, 0);
      resolve(sum);
    }, 1000);
  });
}


function sendSMS(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sending SMS: Your result is ${result}`);
      resolve();
    }, 1000);
  });
}

function logout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🚪 User logged out");
      resolve();
    }, 1000);
  });
}


async function main() {
  let loggedIn = await login();
  if (loggedIn) {
    let data = await getData();
    let result = await calculateData(data);
    await sendSMS(result);
    await logout();
  }
}


main();
