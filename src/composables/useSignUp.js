// import { ref } from "vue";
// import { projectAuth } from "../config/firebase";

// const error = ref(null);
// const isPening = ref(null);

// async function signUp(email, password, fullName) {
//   try {
//     error.value = null;
//     isPening.value = true;
//     const res = await projectAuth.createUserWithEmailAndPassword(
//       email,
//       password
//     );

//     await res.user.updateProfile({ displayName: fullName });
//     return res;
//   } catch (err) {
//     error.value = err.message.split(".")[0].slice(10);
//   } finally {
//     isPening.value = false;
//   }
// }

// export { error, isPening, signUp };
