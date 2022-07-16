<template>
  <div>
    <div>Secret</div>
    <div v-if="firebaseUser">
      <client-only>
        <pre>
    {{ firebaseUser }}
  </pre>
      </client-only>
    </div>
    <div v-else>User Is Signed out</div>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
const firebaseUser = useFirebaseUser()
</script>