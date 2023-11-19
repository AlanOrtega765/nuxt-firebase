<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { currentUser, logout } = useFirebaseAuth();
</script>

<template>
  <div>
    <h1>Admin (Ruta protegida)</h1>
    <h2>{{ currentUser()?.email }}</h2>
    <h2>{{ currentUser()?.uid }}</h2>
    <UButton @click="logout">Salir</UButton>
  </div>
</template>
