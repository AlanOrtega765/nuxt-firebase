<script setup lang="ts">
import Joi from 'joi';
import type { FormSubmitEvent } from '#ui/types';

const { login } = useFirebaseAuth();
const toast = useToast();

const schema = Joi.object({
  email: Joi.string()
    .email({
      tlds: { allow: ['com'] },
    })
    .required(),
  password: Joi.string().min(6).required(),
});

const user = ref({
  email: '',
  password: '',
});

const handleSubmit = (event: FormSubmitEvent<any>) => {
  login(event.data);
  toast.add({
    title: 'Redigiriendo al admin...',
    timeout: 2000,
    callback: async () => await navigateTo('/admin'),
  });
};
</script>

<template>
  <div>
    <h1 class="text-2xl">Login</h1>
    <UForm
      :state="user"
      :schema="schema"
      @submit="handleSubmit"
    >
      <UFormGroup label="Correo" name="email">
        <UInput type="email" v-model.trim="user.email" />
      </UFormGroup>

      <UFormGroup label="Contraseña" name="password">
        <UInput type="password" v-model.trim="user.password" />
      </UFormGroup>

      <UButton type="submit">Ingresar</UButton>
    </UForm>
  </div>
</template>
