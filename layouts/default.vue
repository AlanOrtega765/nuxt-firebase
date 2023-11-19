<script setup lang="ts"></script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex items-center justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>
