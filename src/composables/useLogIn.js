// import { ref } from "vue";
// import axios from "axios";

// const error = ref(null);
// const isPending = ref(null);

// async function signIn(email, password) {
//   try {
//     error.value = null;
//     isPending.value = true;
//     const res = await axios
//       .post("https://stg.api.mariene.jp/api/v1/admin/login", {
//         email,
//         password,
//       })
//       .then((response) => {
//         if (response.data.access_token) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         return response.data;
//       });

//     return res;
//   } catch (err) {
//     error.value = err.response.data.message;
//   } finally {
//     isPending.value = false;
//   }
// }

// export { error, signIn, isPending };
