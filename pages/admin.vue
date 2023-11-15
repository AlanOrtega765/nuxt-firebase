<script setup lang="ts">
const { logout } = useFirebaseAuth();
</script>

<template>
  <div>
    <h1>Admin (Ruta protegida)</h1>
    <UButton @click="logout">Salir</UButton>
  </div>
</template>
