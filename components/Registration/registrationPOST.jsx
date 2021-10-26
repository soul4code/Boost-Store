export const registrationPOST = async (email, pass) => {

  let url = "https://boost-center.com/api/user";

  let init = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    mode: "cors",
    cache: "no-cache",
    body: JSON.stringify({
      login: email,
      password: pass,
    }),
  };

  fetch(url, init)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      localStorage.setItem("boostToken", json.user.UF_REST_API_TOKEN);
    })
    .catch(function (error) {
      console.error(error);
    });
};
