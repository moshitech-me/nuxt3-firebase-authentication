<template>
  <div>
    <div class="container mt-6" v-if="!firebaseUser">
    <AuthFirebase
              class="box px-5 py-5 mx-4"
              title="Register"
              @submit="register"
              :form="registerForm"
              v-if="showRegisterForm"
            />
      <AuthFirebase 
      class="box px-5 py-5 mx-4" 
      title="Sign in"
      @submit="signin" :form="signinForm"
      v-if="!showRegisterForm" />

       <div class="level">
        <div class="level-item has-text-centered">
          <button class="button" @click="showRegisterForm = !showRegisterForm">
            {{ toggleButtonText }}
          </button>
        </div>
      </div>
    </div>
    <NuxtPage v-if="firebaseUser" />
  </div>
</template>
<script setup>
const credentials = ref()
console.log('---app---');
const firebaseUser = useFirebaseUser();

const toggleButtonText = computed(() => {
  return showRegisterForm.value ? "Sign in" : "Register";
});

const showRegisterForm = ref(false)
const registerForm = ref({ email: "", password: "" });
const register = async () => {
  console.log(registerForm.value);
  const credentials = await createUser(registerForm.value.email, registerForm.value.password);
  registerForm.value = { email: "", password: "" };

  // if(credentials) {
  //     registerMessage.value = `Successfully registered: ${credentials.user.email}`
  //     setTimeout(() => {
  //       registerMessage.value = ""
  //     }, 3000);
  //   }
};
const signinForm = ref({ email: "", password: "" });
const signin = () => {
  console.log(signinForm.value);
  signInUser(signinForm.value.email, signinForm.value.password);
  signinForm.value = { email: "", password: "" };
};
</script>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
</style>
