<template>
<div>
  <div>
    <p><NuxtLink to="/secret" class="button">Go to secret page</NuxtLink></p>
   <button class="button" @click="signIn" v-if="!firebaseUser">Sign In</button>
   <button class="button" @click="signOut" v-else>Sign Out</button>
  </div>
  <div v-if="firebaseUser">
  <client-only>
  <pre>
    {{firebaseUser}}
  </pre>
  </client-only>
  </div>
  <div v-else>
    User Signed out
  </div>
  </div>
</template>
<script setup>
const credentials =ref()
console.log('---app---');
const firebaseUser = useFirebaseUser()
const signIn = async ()=>{
  const email = "rmoshiur81@gmail.com"
  const password = "111111"
  // const credentials =await createUser(email, password)
  credentials.value = await signInUser(email, password)
  console.log("Credentials:",credentials);
}
const signOut = async ()=>{
  credentials.value = await signOutUser()
  console.log("Result:",credentials);
}
onMounted(async () =>{
  //alert('ok')
  // const email = "rmoshiur81@gmail.com"
  // const password = "111111"
  // const credentials =await createUser(email, password)
  // const credentials =await signInUser(email, password)
  // console.log("Credentials:",credentials);

  // const result = await signOutUser()
  // console.log("Result:",result);
})

</script>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
