export const authorisationPOST = async (email, pass) => {
  let url = `https://boost-center.com/api/user/token/index.php?${email}&${pass}`;

  let init = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    mode: "cors",
    cache: "default",
    // body: JSON.stringify({
    //   'login': email,
    //   'password': pass,
    // }),
  };

  fetch(url, init)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    })
    .catch(function (error) {
      console.error(error);
    });
};
