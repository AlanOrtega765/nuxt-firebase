<script setup lang="ts">
import Joi from 'joi';
import type { FormSubmitEvent } from '#ui/types';
import type { UForm } from '#ui-colors/components';

const { register } = useFirebaseAuth();
const toast = useToast();

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const user = ref({
  email: '',
  password: '',
});

const handleSubmit = (event: FormSubmitEvent<any>) => {
  register(event.data);
  toast.add({
    title: 'Redigiriendo al admin...',
    timeout: 2000,
    callback: async () => await navigateTo('/admin'),
  });
};
</script>

<template>
  <div>
    <h1 class="text-2xl">Register</h1>
    <UForm
      class="grid gap-y-4 mt-4"
      :state="user"
      :schema="schema"
      @submit="handleSubmit"
    >
      <UFormGroup label="Correo" name="email">
        <UInput type="email" v-model="user.email" />
      </UFormGroup>
      <UFormGroup label="Contraseña" name="password">
        <UInput type="password" v-model="user.password" />
      </UFormGroup>
      <UButton class="w-fit" type="submit">Registrarme</UButton>
    </UForm>
  </div>
</template>
