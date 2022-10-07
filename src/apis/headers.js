export default function headers() {
  let user = JSON.parse(localStorage.getItem("user"));
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (user && user.access_token) {
    return { ...headers, Authorization: "Bearer " + user.access_token };
  } else {
    return headers;
  }
}
