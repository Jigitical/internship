const request = require("request"); // request has been deprecated

const fetch = require("node-fetch");

const getUsers = () => new Promise((resolve, reject) => {
  request("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
    if (error || response.statusCode !== 200) reject(error);

    resolve(JSON.parse(body));
  });
});

// getUsers()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     throw new Error(error);
//   });

// 1. Rewrite getUsers to async/await

async function getUsers2() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

(async () => {
  const resp = await getUsers2();

  console.log(await resp.json());
})();

/**
 *  2. Add another request to url - https://jsonplaceholder.typicode.com/comments.
 *  Make two requests, and return all values
 *  Hint: Promise.all
 * */

async function getComments() {
  return fetch("https://jsonplaceholder.typicode.com/comments");
}

(async () => {
  const resp = await Promise.all([getUsers2(), getComments()]);

  console.log(await Promise.all([resp[0].json(), resp[1].json()]));
})();

/**
 * 3. Read about Promice.race
 * Try to use it on previous two requests
 */

(async () => {
  const resp = await Promise.race([getUsers2(), getComments()]);

  console.log(await resp.json());
})();

/**
 * 4. Read about Promice.any
 * Try to use it on previous two requests
 */

(async () => {
  const resp = await Promise.any([getUsers2(), getComments()]);

  console.log(await resp.json());
})();
